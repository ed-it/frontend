import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as marketModel from './../models';

@Injectable()
export class MarketService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch the market data object from the server
   * @public
   * @name getMarketData
   * @returns Observable<marketModel.MarketData>
   */
  public getMarketData(): Observable<marketModel.MarketData> {
    return this.http.get<marketModel.MarketData>('http://localhost:12342/api/market');
  }
}
