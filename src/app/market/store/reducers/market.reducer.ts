import * as marketActions from '../actions/market.actions';
import { MarketData } from '../../models/MarketData.interface';

export interface MarketState {
  data: MarketData;
  loaded: boolean;
  loading: boolean;
}

export const initialState: MarketState = {
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

export function reducer(state: MarketState = initialState, action: marketActions.MarketAction): MarketState {
  switch (action.type) {
    case marketActions.LOAD_MARKET: {
      return {
        ...state,
        loading: true
      };
    }
    case marketActions.LOAD_MARKET_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
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

export const getMarketLoading = (state: MarketState) => state.loading;
export const getMarketLoaded = (state: MarketState) => state.loaded;
export const getMarketData = (state: MarketState) => state.data;

export const getMarketCategories = (state: MarketState) => state.data.params.categoryKeys;
