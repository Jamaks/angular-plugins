import { cartReducer } from './cart/cart.reducer';
import { toolbarReducer } from './toolbar/toolbar.reducer';
import { Toolbar } from './toolbar/toolbar.model';
import { Cart } from './cart/cart.model';

export { incrementCartItem, decrementCartItem } from './cart/cart.action';
export { addLinksToolbar } from './toolbar/toolbar.action';

export const ROOT_REDUCER: IRootReducer = {
  cart: cartReducer,
  toolbar: toolbarReducer
};

export interface IRootReducer {
  cart: any;
  toolbar: any;
}

export interface AppState {
  cart: Cart;
  toolbar: Toolbar[];
}
