import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Input('data') data: any;

  page: number;
  display: number;
  searchFilter: string;
  totalRecords: number;

  constructor(private route: ActivatedRoute) {
    this.data = [];
    this.totalRecords = 0;
    this.searchFilter = '';
    this.page = 0;
    this.display = 50;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.totalRecords = data.data.totalRecords;
      this.data = data.data.result;
    });
  }

  get totalLyJumped() {
    return (this.data || [])
      .map(jump => jump.params.JumpDist)
      .reduce((reducer, distance) => (reducer += distance), 0)
      .toFixed(2);
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
