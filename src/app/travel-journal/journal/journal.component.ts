import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalApiService } from './journal-api.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-journal',
  providers: [JournalApiService, Ng4LoadingSpinnerService],
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {
  @Input('data') data: any;
  loading: boolean;
  totalRecords: number;

  constructor(
    private route: ActivatedRoute,
    private api: JournalApiService,
    private spinner: Ng4LoadingSpinnerService
  ) {
    this.loading = false;
    this.data = [];
    this.totalRecords = 0;
  }

  filterChange(event) {
    this.loading = true;
    this.spinner.show();
    const data = this.api.get(event);
    data.subscribe((result: any) => {
      this.totalRecords = result.totalRecords;
      this.data = result.result;
      this.spinner.hide();
      this.loading = false;
    });
  }

  faction(params) {
    if (!params.Faction) {
      return 'None';
    }
    const faction = `${params.Faction}`;
    let suffix = '';
    if (params.Allegiance) {
      suffix = `${suffix} Power: ${params.Allegiance}`;
    }
    if (params.Government_Localised) {
      suffix = `${suffix}, Government: ${params.Government_Localised}`;
    }
    if (suffix.length > 0) {
      suffix = `(${suffix})`;
    }
    return `${faction} ${suffix}`;
  }
}
