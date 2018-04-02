import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
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
export class FilterBarComponent implements OnInit {
  @Input('data') data: Observable<any>;

  @Input('title') title: string;

  @Input('totalRecords') totalRecords: number;

  @Output('filterChange')
  filterChange: EventEmitter<any> = new EventEmitter<any>();

  private debouncer: Subject<object> = new Subject();

  params: any;

  private totalLy: number;

  constructor(private fbs: FilterBarService) {
    this.params = this.fbs.getParameters();
  }

  get totalLyJumped() {
    return this.data
      .map(jump => jump.params.JumpDist)
      .reduce((reducer, distance) => (reducer += distance), 0)
  }

  get orderByOptions() {
    return ORDER_BY_OPTIONS;
  }

  ngOnInit() {
    this.params = this.fbs.getParameters();
    this.filterChange.emit(this.params);

    this.debouncer
      .debounceTime(500)
      .subscribe(options => this.filterChange.emit(options));
  }

  onChange() {
    this.fbs.set(this.params);
    this.debouncer.next(this.params);
  }
}
