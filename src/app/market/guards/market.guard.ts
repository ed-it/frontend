import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, take, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as marketStore from '../store/';

@Injectable()
export class MarketGuard implements CanActivate {
  constructor(private store: Store<marketStore.MarketToolState>) {}

  getData(): Observable<any> {
    return this.store.pipe(
      select('market'),
      tap((data: marketStore.MarketToolState) => {
        if (!data.market.loaded) {
          this.store.dispatch(new marketStore.LoadMarket());
        }
      }),
      take(1)
    );
  }

  canActivate(): Observable<boolean> {
    return this.getData()
      .pipe(switchMap(() => of(true)))
      .catch(() => of(false));
  }
}
