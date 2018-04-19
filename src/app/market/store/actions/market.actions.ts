import { Action } from '@ngrx/store';

import { MarketData } from '../../models/MarketData.interface';

export const LOAD_MARKET = '[Market] Load Market';
export const LOAD_MARKET_FAIL = '[Market] Load Market Fail';
export const LOAD_MARKET_SUCCESS = '[Market] Load Market Success';

export class LoadMarket implements Action {
  readonly type = LOAD_MARKET;
}

export class LoadMarketFail implements Action {
  readonly type = LOAD_MARKET_FAIL;
  constructor(public payload: any) {}
}

export class LoadMarketSuccess implements Action {
  readonly type = LOAD_MARKET_SUCCESS;
  constructor(public payload: MarketData) {}
}

export type MarketAction = LoadMarket | LoadMarketFail | LoadMarketSuccess;
