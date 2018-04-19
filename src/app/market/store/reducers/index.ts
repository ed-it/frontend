import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as marketReducer from './market.reducer';
import * as marketModel from '../../models';

export const reducers: ActionReducerMap<marketModel.MarketToolState> = {
  market: marketReducer.reducer
};

export const getMarketState = createFeatureSelector<marketModel.MarketToolState>('market');

// Market State

export const getMarket = createSelector(getMarketState, (state: marketModel.MarketToolState) => state.market);

export const getMarketData = createSelector(getMarket, marketReducer.getMarketData);
export const getMarketLoading = createSelector(getMarket, marketReducer.getMarketLoading);
export const getMarketLoaded = createSelector(getMarket, marketReducer.getMarketLoaded);
