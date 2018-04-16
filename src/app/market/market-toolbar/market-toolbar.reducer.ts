import { Action } from '@ngrx/store';

interface MarketToolbarAction extends Action {
  payload: MarketToolbarState;
}

export interface MarketToolbarState {
  searchQuery: string;
  profitMargin: number;
  filterUnprofitable: boolean;
}

const defaultState: MarketToolbarState = {
  searchQuery: '',
  profitMargin: 110,
  filterUnprofitable: false
};

export const UPDATE_MARKET_TOOLBAR = 'UPDATE_MARKET_TOOLBAR';
export const RESET_MARKET_TOOLBAR = 'RESET_MARKET_TOOLBAR';

export function marketToolbarReducer(state: MarketToolbarState = defaultState, action: MarketToolbarAction) {
  switch (action.type) {
    case UPDATE_MARKET_TOOLBAR:
      return action.payload;
    case RESET_MARKET_TOOLBAR:
      return defaultState;
    default:
      return state;
  }
}
