import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MarketState } from './market-reducer';

@Injectable()
export class MarketApi {
  constructor(private http: HttpClient) {}

  public getMarketData(): Observable<Object> {
    return this.http.get('http://localhost:12342/api/market');
  }
}
