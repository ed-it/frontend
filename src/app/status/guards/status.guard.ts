import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, take, switchMap, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as statusStore from '../store/';
import * as statusModel from '../models';

@Injectable()
export class StatusGuard implements CanActivate {
  constructor(private store: Store<statusModel.StatusToolState>) {}

  getData(): Observable<any> {
    return this.store.pipe(
      select('status'),
      tap((data: statusModel.StatusState) => {
        if (!data.loaded) {
          this.store.dispatch(new statusStore.LoadStatus());
        }
      }),
      take(1)
    );
  }

  canActivate(): Observable<boolean> {
    return this.getData().pipe(switchMap(() => of(true)), catchError(error => of(error)));
  }
}
