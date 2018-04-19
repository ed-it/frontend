import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import * as marketStore from '../../store/';
import { MarketData } from '../../models/MarketData.interface';
import { MarketToolbarState } from '../../components/market-toolbar/market-toolbar.component';

@Component({
  selector: 'app-market-container',
  template: `
    <section id="market-container" *ngIf="data$ | async; let data; else noData;">
      <app-market-toolbar [data]="data" (filterUpdated)="onFilterUpdated($event)"></app-market-toolbar>
      <app-market-categories [keys]="data?.params?.categoryKeys" [categories]="data?.params?.categories"
        [filter]="filter"></app-market-categories>
    </section>
    <ng-template #noData>
      <h2>No Market Data</h2>
    </ng-template>
  `
})
export class MarketContainerComponent implements OnInit {
  filter: MarketToolbarState;
  data$: Observable<MarketData>;

  constructor(private store: Store<marketStore.MarketToolState>) {}

  ngOnInit() {
    this.data$ = this.store.pipe(select(marketStore.getMarketData));
  }

  onFilterUpdated(filter: MarketToolbarState) {
    this.filter = filter;
  }
}
