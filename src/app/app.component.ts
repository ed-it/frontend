import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { StreamsService } from './streams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  marketData: any;
  marketDataKeys: string[];

  constructor(private streams: StreamsService, private api: ApiService) {
    this.marketData = {};
  }

  ngOnInit() {
    const market = this.streams.connect('/stream/market');
    market.subscribe(data => {
      console.log(data);
      this.marketData = data;
      this.marketDataKeys = Object.keys(this.marketData.results);
    });

    const lastMarket = this.api.getMarketData();
    lastMarket.subscribe(data => {
      console.log(data);
      this.marketData = data;
      this.marketDataKeys = Object.keys(this.marketData.results);
    });
  }

  goodBuy(item) {
    return item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > 110;
  }

  badSell(item) {
    return item.Stock > item.Demand && item.MeanPrice / item.SellPrice * 100 > 90;
  }
}
