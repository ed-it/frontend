import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { share } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { MarketApi } from './market-api.service';
import { MarketState } from './market-reducer';

@Injectable()
export class MarketResolver implements Resolve<Observable<Object>> {
  constructor(private api: MarketApi, private store: Store<MarketState>) {}

  resolve() {
    const result = this.api.getMarketData().pipe(share());

    const store = result.subscribe(
      (payload: MarketState) => {
        this.store.dispatch({ type: 'UPDATE_MARKET', payload });
      },
      err => console.log(err),
      () => store.unsubscribe()
    );
    return result;
  }
}
