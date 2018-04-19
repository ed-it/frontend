import { MarketData } from './market-data.interface';

export interface MarketState {
  data: MarketData;
  loaded: boolean;
  loading: boolean;
}

export interface MarketToolState {
  market: MarketState;
}
