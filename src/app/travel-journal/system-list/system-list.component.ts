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

  totalRecords: number;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private api: SystemListApiService
  ) {
    this.data = [];
    this.loading = false;
  }

  ngOnInit() {
    // this.route.data.subscribe(({ data }) => {
    //   this.data = data.result;
    //   this.totalRecords = data.totalRecords;
    // });
  }

  filterChange(event) {
    const data = this.api.get(event);
    data.subscribe((result: any) => {
      this.totalRecords = result.totalRecords;
      this.data = result.result;
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
