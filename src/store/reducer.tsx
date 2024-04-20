import { GlobalState, ActionTypes, Action } from "./actions";

export const initialState: GlobalState = {
  selectedProducts: [],
  loading: false,
  productList: [],
};

export const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_PRODUCTS:
      return { ...state, selectedProducts: action.payload };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case ActionTypes.CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};
