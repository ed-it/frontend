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
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><strong>Market Data</strong>: {{data.params.stationName}} -  {{data.params.systemName}}</h5>
        <h6 class="card-subtitle">Last Updated: {{data.timestamp | date:'dd-MM-yyyy HH:mm'}}</h6>
      </div>
    </div>
    <app-market-toolbar (filterUpdated)="onFilterUpdated($event)"></app-market-toolbar>
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
    this.store.dispatch(new marketStore.LoadMarket());
  }

  onFilterUpdated(filter: MarketToolbarState) {
    this.filter = filter;
  }
}
