const defaultState = {
  timestamp: '',
  payload: {}
};

export const fetchMarket = (state = defaultState, action) => {
  switch (action.type) {
    case 'MARKET_FETCH':
      return { ...state, fetchMarket: true };
    case 'MARKET_DATA':
      return { ...state, ...action.payload, fetchMarket: false };
    default:
      return state;
  }
};
