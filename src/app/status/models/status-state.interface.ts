import { StatusReponse } from './status-data.interface';

export interface StatusState {
  data: StatusReponse;
  loaded: boolean;
  loading: boolean;
}

export interface StatusToolState {
  status: StatusState;
}
