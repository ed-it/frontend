import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class Journal implements OnInit {
  @Input('data') data: any;

  page: number;
  display: number;
  searchFilter: string;

  constructor(private route: ActivatedRoute) {
    this.data = [];
    this.searchFilter = '';
    this.page = 0;
    this.display = 50;
  }

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      this.data = data;
    });
  }

  get journal() {
    let result = this.data;
    if (this.searchFilter) {
      result = result.filter(jump => jump.params.StarSystem.toLowerCase().includes(this.searchFilter.toLowerCase()));
    }
    result = result.slice(
      (this.page - 1) * this.display,
      this.page * this.display
    );
    return result;
  }

  get totalLyJumped() {
    return this.data
      .map(jump => jump.params.JumpDist)
      .reduce((reducer, distance) => (reducer += distance), 0)
      .toFixed(2);
  }

  faction(params) {
    if (!params.Faction) {
      return 'None';
    }
    let faction = `${params.Faction}`;
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
