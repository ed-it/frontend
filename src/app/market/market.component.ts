import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketApi } from './market-api.service';
import { MarketStream } from './market-stream.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MarketState } from './market-reducer';
import { MarketToolbarState } from './market-toolbar/market-toolbar.reducer';

@Component({
  selector: 'app-market',
  providers: [MarketApi, MarketStream],
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  data$: Observable<MarketState>;
  filter$: Observable<MarketToolbarState>;

  searchFilter: string;
  onlyShowProfitable: boolean;
  profitMargin: number;

  constructor(private api: MarketApi, private store: Store<any>) {
    this.data$ = store.pipe(select('market'));
    this.filter$ = store.pipe(select('marketToolbar'));
  }
}
