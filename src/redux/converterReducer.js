let initialState = {
  currency: null,
  converted: null,
  sum: null

};

export const converterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-CURRENCY':
      return {
        ...state,
        currency: action.currency
      };
    case 'SET-CONVERTED':
      return {
        ...state,
        converted: action.value
      };
    case 'SET-SUM':
      return {
        ...state,
        sum: action.sum
      };
    default:
      return {
        ...state
      }
  }
};

export const setCurrency = (currency) => ({type: 'SET-CURRENCY', currency});
export const setConverted = (value) => ({type: 'SET-CONVERTED', value});
export const setSum = (sum) => ({type: 'SET-SUM', sum});