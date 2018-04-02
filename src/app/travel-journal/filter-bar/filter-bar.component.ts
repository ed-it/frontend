import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { FilterBarService } from './filter-bar.service';

const ORDER_BY_OPTIONS = [
  { key: 'timestamp', label: 'Timestamp' },
  { key: 'systemName', label: 'System Name' }
];

@Component({
  selector: 'app-journal-filter-bar',
  providers: [FilterBarService],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, OnChanges {
  @Input('data') data: any[];

  @Input('title') title: string;

  @Input('totalRecords') totalRecords: number;

  @Output('filterChange')
  filterChange: EventEmitter<any> = new EventEmitter<any>();

  private debouncer:Subject<object> = new Subject();

  params: any;

  constructor(private fbs: FilterBarService) {}

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
    this.params = this.fbs.getParameters();
    this.filterChange.emit(this.params);

    this.debouncer.debounceTime(500).subscribe(options => {
      this.filterChange.emit(options);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.data) {
      const dataChange: SimpleChange = changes.data;
      console.log(dataChange);
    }
    // const { page, limit, searchQuery, orderBy, order } = this;
    // this.filterChange.emit({ page, limit, searchQuery, orderBy, order });
  }

  onChange() {
    this.fbs.set(this.params);
    // this.filterChange.emit(this.params);
    this.debouncer.next(this.params);
  }
}
