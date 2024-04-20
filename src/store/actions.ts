export enum ActionTypes {
  SET_SELECTED_PRODUCTS = "SET_SELECTED_PRODUCTS",
  SET_LOADING = "SET_LOADING",
  CLEAR_STATE = "CLEAR_STATE",
  SET_PRODUCT_LIST = "SET_PRODUCT_LIST",
}

export type Action =
  | { type: ActionTypes.SET_SELECTED_PRODUCTS; payload: any[] }
  | { type: ActionTypes.SET_LOADING; payload: boolean }
  | { type: ActionTypes.CLEAR_STATE }
  | { type: ActionTypes.SET_PRODUCT_LIST; payload: any[] };

export interface GlobalState {
  productList: any[];
  selectedProducts: any[];
  loading: boolean;
}
