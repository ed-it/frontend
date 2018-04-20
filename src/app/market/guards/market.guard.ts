import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, take, switchMap, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as marketStore from '../store/';
import * as marketModel from '../models';

@Injectable()
export class MarketGuard implements CanActivate {
  constructor(private store: Store<marketModel.MarketToolState>) {}

  getData(): Observable<any> {
    return this.store.pipe(
      select(marketStore.getMarketLoaded),
      tap((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(new marketStore.LoadMarket());
        }
      }),
      take(1)
    );
  }

  canActivate(): Observable<boolean> {
    return this.getData().pipe(switchMap(() => of(true)), catchError(error => of(error)));
  }
}
