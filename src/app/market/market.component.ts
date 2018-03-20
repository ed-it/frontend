import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketApi } from './market-api.service';
import { MarketStream } from './market-stream.service';
import { Store } from '@ngrx/store';

import { MarketState } from './state/market.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-market',
  providers: [MarketApi, MarketStream],
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  marketState: Observable<any>;

  marketData: any;
  marketDataKeys: string[];

  searchFilter: string;
  onlyShowProfitable: boolean;
  lastUpdate: Date;

  @Input('profitMargin') profitMargin: number;
  @Output('change') change = new EventEmitter<number>();

  constructor(private streams: MarketStream, private api: MarketApi, private store: Store<MarketState>) {

    this.marketState = this.store.select((state: any) => state.market);

    this.searchFilter = '';
    this.onlyShowProfitable = false;
    this.profitMargin = 110;
    this.marketData = {};
  }

  ngOnInit() {

    this.store.dispatch({
      type: 'MARKET_FETCH',
      payload: {}
    });

    this.streams.connect().subscribe((data: any) => {
      const { event, timestamp, params } = data;
      if (event === 'Market') {
        this.store.dispatch({
          type: 'MARKET_DATA',
          payload: { timestamp, params }
        });
        this.lastUpdate = new Date(timestamp);
        this.marketData = params;
        this.marketDataKeys = Object.keys(this.marketData.categories);
      }
    });

    const lastMarket = this.api.getMarketData();
    lastMarket.subscribe((data: any) => {
      const { event, timestamp, params } = data;
      this.store.dispatch({
        type: 'MARKET_DATA',
        payload: { timestamp, params }
      });
      this.lastUpdate = new Date(timestamp);
      this.marketData = params;
      this.marketDataKeys = Object.keys(this.marketData.categories);
    });
  }

  isDisabled(category) {
    const result = this.getCommodities(category);
    return result.length === 0;
  }

  getCommodities(category) {
    let result = [];

    if (this.marketData.categories && this.marketData.categories[category]) {
      result = this.marketData.categories[category].commodities;
      if (this.searchFilter) {
        result = result.filter(commodity =>
          commodity.Name_Localised.toLowerCase().includes(this.searchFilter.toLowerCase())
        );
      }
      if (this.onlyShowProfitable) {
        result = result.filter(this.goodBuy.bind(this));
      }
    }
    return result;
  }

  goodBuy(item) {
    return item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > this.profitMargin;
  }

  badSell(item) {
    return item.Stock > item.Demand && item.SellPrice / item.MeanPrice * 100 < this.profitMargin - 10;
  }

  profit(item) {
    let percentage = item.SellPrice / item.MeanPrice * 100;
    if (percentage < 100) {
      percentage = (100 - percentage) * -1;
    }
    return `${percentage.toFixed(2)}%`;
  }
}
