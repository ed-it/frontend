import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges
} from '@angular/core';

const ORDER_BY_OPTIONS = [
  { key: 'timestamp', label: 'Timestamp', },
  { key: 'systemName', label: 'System Name' }
];

@Component({
  selector: 'app-journal-filter-bar',
  // providers: [JournalApiService],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, OnChanges {
  @Input('data') data: any[];

  @Input('title') title: string;

  @Input('totalRecords') totalRecords: number;

  @Input('loading') loading: boolean;

  @Output('filterChange')
  filterChange: EventEmitter<any> = new EventEmitter<any>();

  page: number;

  limit: number;

  searchQuery: string;

  orderBy: string;

  order: string;

  constructor() {
    this.loading = false;
    this.page = 1;
    this.limit = 50;
    this.searchQuery = '';
    this.orderBy = 'timestamp';
    this.order = 'ASC';
  }

  get totalLyJumped() {
    return (this.data || [])
      .map(jump => jump.params.JumpDist)
      .reduce((reducer, distance) => (reducer += distance), 0)
      .toFixed(2);
  }

  get orderByOptions() {
    return ORDER_BY_OPTIONS;
  }

  ngOnInit() {
    const { page, limit, searchQuery, orderBy, order } = this;
    this.filterChange.emit({ page, limit, searchQuery, orderBy, order });
  }

  ngOnChanges() {
    // console.log(this);
    // const { page, limit, searchQuery, orderBy, order } = this;
    // this.filterChange.emit({ page, limit, searchQuery, orderBy, order });
  }

  onChange() {
    const { page, limit, searchQuery, orderBy, order } = this;
    this.filterChange.emit({ page, limit, searchQuery, orderBy, order });
  }
}
