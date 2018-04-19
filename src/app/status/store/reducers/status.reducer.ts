import * as statusActions from '../actions';
import * as statusModel from '../../models';

export const initialData: statusModel.StatusState = {
  data: {
    event: '',
    timestamp: 0,
    params: {
      pips: {},
      status: {},
      currentLocation: {},
      currentShip: {}
    }
  },
  loading: false,
  loaded: false
};

export function reducers(state: statusModel.StatusState = initialData, action: statusActions.StatusAction) {
  switch (action.type) {
    case statusActions.LOAD_STATUS: {
      return {
        ...state,
        loading: true
      };
    }
    case statusActions.LOAD_STATUS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case statusActions.LOAD_STATUS_SUCCESS: {
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

export const getStatusLoading = (state: statusModel.StatusState) => state.loading;
export const getStatusLoaded = (state: statusModel.StatusState) => state.loaded;
export const getStatusData = (state: statusModel.StatusState) => state.data;
