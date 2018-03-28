import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemListApiService } from './system-list-api.service';

@Component({
  selector: 'app-system-list',
  providers: [SystemListApiService],
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.scss']
})
export class SystemListComponent implements OnInit {
  @Input('data') data: any[];
  @Input('page') page: number;
  @Input('searchFilter') searchFilter: string;

  display: number;
  totalRecords: number;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private api: SystemListApiService
  ) {
    this.data = [];
    this.page = 0;
    this.display = 50;
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.route.data.subscribe(({ data }) => {
      this.data = data.result;
      this.totalRecords = data.totalRecords;
      this.loading === false;
    });
  }

  onChange() {
    this.loading = true;
    let options = {
      page: this.page,
      display: this.display,
      searchFilter: this.searchFilter
    };

    const data = this.api.get(options);
    data.subscribe((result: any) => {
      this.totalRecords = result.totalRecords;
      this.data = result.result;
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
