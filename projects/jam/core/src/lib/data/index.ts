import { cartReducer } from './cart.reducer';
import { Cart } from '../model/cart.model';
export * from './cart.action';

export const ROOT_REDUCER: IRootReducer = {
  cart: cartReducer
};

export interface IRootReducer {
  cart: any;
}

export interface AppState {
  cart: Cart;
}
