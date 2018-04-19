export interface MarketDataParams {
  id: string;
  systemName: string;
  stationName: string;
  categoryKeys: string[];
  categories: { [key: string]: any[] };
}

export interface MarketData {
  event: string;
  timestamp: number;
  params: MarketDataParams;
}
