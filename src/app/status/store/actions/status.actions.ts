import { Action } from '@ngrx/store';

import * as statusModel from '../../models';

export const LOAD_STATUS = '[Status] Load Status';
export const LOAD_STATUS_FAIL = '[Status] Load Status Fail';
export const LOAD_STATUS_SUCCESS = '[Status] Load Status Success';

export class LoadStatus implements Action {
  readonly type = LOAD_STATUS;
}

export class LoadStatusFail implements Action {
  readonly type = LOAD_STATUS_FAIL;
  constructor(public payload: any) {}
}

export class LoadStatusSuccess implements Action {
  readonly type = LOAD_STATUS_SUCCESS;
  constructor(public payload: statusModel.StatusReponse) {}
}

export type StatusAction = LoadStatus | LoadStatusFail | LoadStatusSuccess;
