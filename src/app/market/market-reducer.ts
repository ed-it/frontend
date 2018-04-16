import { Action } from '@ngrx/store';

export interface MarketAction extends Action {
  payload: Object;
}

export interface MarketState {
  event: string;
  timestamp: number;
  params: object;
}

const defaultState: MarketState = {
  event: '',
  timestamp: 0,
  params: {}
};

export const GET_MARKET = 'GET_MARKET';
export const UPDATE_MARKET = 'UPDATE_MARKET';
export const RESET_MARKET = 'RESET_MARKET';

export function marketReducer(state: MarketState = defaultState, action: MarketAction) {
  switch (action.type) {
    case 'UPDATE_MARKET':
      return action.payload;
    case 'RESET_MARKET':
      return defaultState;
    default:
      return state;
  }
}
