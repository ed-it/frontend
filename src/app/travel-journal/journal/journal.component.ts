import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalApiService } from './journal-api.service';

@Component({
  selector: 'app-journal',
  providers: [JournalApiService],
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Input('data') data: any;

  @Input('page') page: number;

  @Input('searchFilter') searchFilter: string;

  loading: boolean;

  display: number;
  totalRecords: number;

  constructor(private route: ActivatedRoute, private api: JournalApiService) {
    this.loading = false;
    this.data = [];
    this.totalRecords = 0;
    this.searchFilter = '';
    this.page = 0;
    this.display = 50;
  }

  ngOnInit() {
    this.loading = true;
    this.route.data.subscribe(({ data }) => {
      this.totalRecords = data.totalRecords;
      this.data = data.result;
      this.loading = false;
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
