import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as marketActions from '../actions/market.actions';
import { MarketService } from '../../services/market.service';

@Injectable()
export class MarketEffects {
  constructor(private actions$: Actions, private marketService: MarketService) {}

  @Effect()
  loadMarket$ = this.actions$.ofType(marketActions.LOAD_MARKET).pipe(
    switchMap(() => {
      return this.marketService
        .getMarketData()
        .pipe(
          map(marketData => new marketActions.LoadMarketSuccess(marketData)),
          catchError(error => of(new marketActions.LoadMarketFail(error)))
        );
    })
  );
}
