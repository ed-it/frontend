import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { SystemListApiService } from './system-list-api.service';

@Component({
  selector: 'app-system-list',
  providers: [SystemListApiService],
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.scss']
})
export class SystemListComponent implements OnInit {
  @Input('data') data: Observable<any>;

  openJumpLists: number[];
  totalRecords: number;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private api: SystemListApiService
  ) {
    this.openJumpLists = [];
    this.loading = false;
  }

  ngOnInit() {}

  filterChange(event) {
    this.openJumpLists = [];
    this.data = this.api.get(event);
    // data.subscribe((result: any) => {
    //   this.totalRecords = result.totalRecords;
    //   this.data = result.result;
    // });
  }

  onJumpListToggle(index) {
    const valueIndex = this.openJumpLists.indexOf(index);
    console.log(index, valueIndex);
    if (valueIndex > -1) {
      this.openJumpLists.splice(valueIndex, 1);
    } else {
      this.openJumpLists.push(index);
    }
    console.log(this.openJumpLists);
  }

  isOpen(index) {
    return this.openJumpLists.includes(index);
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
