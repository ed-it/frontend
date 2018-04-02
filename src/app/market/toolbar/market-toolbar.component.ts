import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-market-toolbar',
  templateUrl: './market-toolbar.component.html'
})
export class MarketToolbarComponent implements OnInit {
  @Input('title') title: string;

  @Input('data') data: any;

  @Input('lastUpdate') lastUpdate: Date;

  private debouncer:Subject<object> = new Subject();

  @Output('filterChange')
  filterChange: EventEmitter<any> = new EventEmitter<any>();

  onlyShowProfitable: boolean;

  profitMargin: number;

  searchQuery: string;

  constructor() {
    this.onlyShowProfitable = false;
    this.profitMargin = 110;
    this.searchQuery = '';
  }

  ngOnInit() {
    // const { profitMargin, searchQuery, onlyShowProfitable } = this;
    // this.filterChange.emit({ profitMargin, searchQuery, onlyShowProfitable });
    this.debouncer.debounceTime(500).subscribe(options => {
      this.filterChange.emit(options);
    })
  }

  onChange() {
    const { profitMargin, searchQuery, onlyShowProfitable } = this;
    // this.filterChange.emit({ profitMargin, searchQuery, onlyShowProfitable });
    this.debouncer.next({ profitMargin, searchQuery, onlyShowProfitable });
  }
}
