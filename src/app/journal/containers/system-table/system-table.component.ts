import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-system-table',
  templateUrl: './system-table.component.html',
  styleUrls: ['./system-table.component.scss']
})
export class SystemTableComponent implements OnInit {
  @Input('systems') systems: any;

  page: number;
  display: number;
  systemKeys: string[];
  searchFilter: string;

  constructor(private route: ActivatedRoute) {
    this.systems = {};
    this.systemKeys = [];
    this.page = 0;
    this.display = 50;
  }

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      this.systems = data;
      this.systemKeys = Object.keys(this.systems);
    });
  }

  get list() {
    let result = this.systemKeys;
    if (this.searchFilter) {
      result = result.filter((system: any) => system.toLowerCase().includes(this.searchFilter.toLowerCase()));
      result = result.slice(0, this.display);
    } else {
      result = result.slice((this.page - 1) * this.display, this.page * this.display);
    }

    return result;
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
