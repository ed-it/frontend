import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MarketData } from './../models/MarketData.interface';

@Injectable()
export class MarketService {
  constructor(private http: HttpClient) {}

  public getMarketData(): Observable<MarketData> {
    return this.http.get<MarketData>('http://localhost:12342/api/market');
  }
}
