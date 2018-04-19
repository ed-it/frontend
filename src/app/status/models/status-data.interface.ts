export interface PipDisplay {
  sys: number[];
  eng: number[];
  wep: number[];
}

export interface StatusParams {
  pips: any;
  status: any;
  currentShip: any;
  currentLocation: any;
}

export interface StatusReponse {
  event: string;
  timestamp: number;
  params: StatusParams;
}
