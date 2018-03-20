import { Action } from '@ngrx/store';

export const FETCH_MARKET = 'FETCH_MARKET';

export class FetchMarketAction implements Action {
  type = FETCH_MARKET;

  constructor(public payload: any) {}
}
