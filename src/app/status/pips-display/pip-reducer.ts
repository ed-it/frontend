// counter.ts
import { Action } from '@ngrx/store';

export interface PipAction extends Action {
  payload: PipState;
}

export interface PipState {
  sys: number[];
  eng: number[];
  wep: number[];
}

export const UPDATE = 'UPDATE';
export const RESET = 'RESET';

const defaultState: PipState = {
  sys: [2, 2, 0, 0],
  eng: [2, 2, 0, 0],
  wep: [2, 2, 0, 0]
};

function valToElm(index, val) {
  if (index < Math.ceil(val)) {
    const check = val - index;
    if (Number.isInteger(check) && check > 1) {
      return 2;
    } else if (Number.isInteger(check) && check > 0) {
      return 1;
    } else {
      return 0;
    }
  }
}

export function pipReducer(state: PipState = defaultState, action: PipAction) {
  switch (action.type) {
    case UPDATE:
      return {
        sys: state.sys.map((item, i) => valToElm(i, Math.ceil(this.payload.sys))),
        eng: state.eng.map((item, i) => valToElm(i, Math.ceil(this.payload.sys))),
        wep: state.wep.map((item, i) => valToElm(i, Math.ceil(this.payload.sys)))
      };
    case RESET:
      return defaultState;

    default:
      return state;
  }
}
