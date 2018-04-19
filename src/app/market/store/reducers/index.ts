import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as marketReducer from './market.reducer';

export interface MarketToolState {
  market: marketReducer.MarketState;
}

export const reducers: ActionReducerMap<MarketToolState> = {
  market: marketReducer.reducer
};

export const getMarketState = createFeatureSelector<MarketToolState>('market');

// Market State

export const getMarket = createSelector(getMarketState, (state: MarketToolState) => state.market);

export const getMarketData = createSelector(getMarket, marketReducer.getMarketData);
export const getMarketLoading = createSelector(getMarket, marketReducer.getMarketLoading);
export const getMarketLoaded = createSelector(getMarket, marketReducer.getMarketLoaded);
