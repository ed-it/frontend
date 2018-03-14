import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketApi } from './market-api.service';
import { MarketStream } from './market-stream.service';

@Component({
  selector: 'app-market',
  providers: [MarketApi, MarketStream],
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  marketData: any;
  marketDataKeys: string[];

  @Input() profitThreshold = 110;
  @Output() change = new EventEmitter<number>();

  constructor(private streams: MarketStream, private api: MarketApi) {
    this.marketData = {};
  }

  ngOnInit() {
    this.streams.connect().subscribe((data: any) => {
      const { event, timestamp, params } = data;
      console.debug(`Triggering ${event}`, params);
      this.marketData = params;
      this.marketDataKeys = Object.keys(this.marketData.categories);
    });

    const lastMarket = this.api.getMarketData();
    lastMarket.subscribe((data: any) => {
      const { event, timestamp, params } = data;
      console.debug(`Triggering ${event}`, params);
      this.marketData = params;
      this.marketDataKeys = Object.keys(this.marketData.categories);
    });
  }

  getCommodities(category) {
    if (this.marketData.categories && this.marketData.categories[category]) {
      return this.marketData.categories[category].commodities;
    }
    return [];
  }

  goodBuy(item) {
    return item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > this.profitThreshold;
  }

  badSell(item) {
    return item.Stock > item.Demand && item.SellPrice / item.MeanPrice * 100 < 101;
  }

  profit(item) {
    let percentage = item.SellPrice / item.MeanPrice * 100;
    if (percentage < 100) {
      percentage = (100 - percentage) * -1;
    }
    return `${percentage.toFixed(2)}%`;
  }
}
