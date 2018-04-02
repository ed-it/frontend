import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalApiService } from './journal-api.service';
import { Observable } from 'rxjs/Observable';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-journal',
  providers: [JournalApiService, Ng4LoadingSpinnerService],
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {
  @Input('data') data: Observable<any>;
  loading: boolean;
  totalRecords: number;

  constructor(
    private route: ActivatedRoute,
    private api: JournalApiService,
    private spinner: Ng4LoadingSpinnerService,
    private cd: ChangeDetectorRef
  ) {
    this.loading = false;
    this.totalRecords = 0;
  }

  filterChange(event) {
    this.loading = true;
    this.spinner.show();
    this.data = this.api.get(event);
    console.log(this.data);
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

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
