import * as marketActions from '../actions/market.actions';
import { MarketData } from '../../models/market-data.interface';

import * as marketModels from '../../models';

export const initialState: marketModels.MarketState = {
  data: {
    event: '',
    timestamp: 0,
    params: {
      id: '',
      stationName: '',
      systemName: '',
      categoryKeys: [],
      categories: {}
    }
  },
  loaded: false,
  loading: false
};

export function reducer(
  state: marketModels.MarketState = initialState,
  action: marketActions.MarketAction
): marketModels.MarketState {
  switch (action.type) {
    case marketActions.LOAD_MARKET: {
      return {
        ...state,
        loading: true
      };
    }
    case marketActions.LOAD_MARKET_FAIL: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        data
      };
    }

    case marketActions.LOAD_MARKET_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    default:
      return state;
  }
}

/**
 * Get the current loading state of the market data
 * @param state {MarketState}
 */
export const getMarketLoading = (state: marketModels.MarketState) => state.loading;

/**
 * Get the current loaded state of the market data
 * @param state {MarketState}
 */
export const getMarketLoaded = (state: marketModels.MarketState) => state.loaded;

/**
 * Get the current state of the market data
 * @param state {MarketState}
 */
export const getMarketData = (state: marketModels.MarketState) => state.data;

/**
 * Get the current category keys from market data
 * @param state {MarketState}
 */
export const getMarketCategories = (state: marketModels.MarketState) => state.data.params.categoryKeys;
