import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as statusReducer from './status.reducer';
import * as statusModel from '../../models';

export const reducers: ActionReducerMap<statusModel.StatusToolState> = {
  status: statusReducer.reducer
};

export const getStatusState = createFeatureSelector<statusModel.StatusToolState>('status');

// Status State

export const getStatus = createSelector(getStatusState, (state: statusModel.StatusToolState) => state.status);

export const getStatusData = createSelector(getStatus, statusReducer.getStatusData);
export const getStatusLoading = createSelector(getStatus, statusReducer.getStatusLoading);
export const getStatusLoaded = createSelector(getStatus, statusReducer.getStatusLoaded);

