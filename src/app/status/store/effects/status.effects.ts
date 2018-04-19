import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as statusActions from '../actions/status.actions';
import { StatusService } from '../../services/status.service';

@Injectable()
export class StatusEffects {
  constructor(private actions$: Actions, private statusService: StatusService) {}

  @Effect()
  loadMarket$ = this.actions$.ofType(statusActions.LOAD_STATUS).pipe(
    exhaustMap(() => {
      return this.statusService
        .getStatus()
        .pipe(
          map(statusData => new statusActions.LoadStatusSuccess(statusData)),
          catchError(error => of(new statusActions.LoadStatusFail(error)))
        );
    })
  );
}
