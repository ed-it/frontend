import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import * as marketStore from '../../store/';
import * as marketModel from '../../models';
import { MarketToolbarState } from '../../components/market-toolbar/market-toolbar.component';
import { MarketStream } from '../../services/market-stream.service';
import { Subscription } from 'rxjs/Subscription';

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
export class MarketContainerComponent implements OnInit, OnDestroy {
  filter: MarketToolbarState;
  data$: Observable<marketModel.MarketData>;
  stream$: Subscription;

  constructor(private store: Store<marketModel.MarketToolState>, private stream: MarketStream) {}

  ngOnInit() {
    this.data$ = this.store.pipe(select(marketStore.getMarketData));
    this.stream$ = this.stream.connect().subscribe();
  }

  ngOnDestroy() {
    this.stream$.unsubscribe();
  }

  onFilterUpdated(filter: MarketToolbarState) {
    this.filter = filter;
  }
}
