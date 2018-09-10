import * as CartsActions from './cart.action';
import { CartActionTypes } from './cart.action';
import { Cart } from '../model/cart.model';

export type Action = CartsActions.All;

export interface State {
  cart: Cart;
}

export const initialState: State = {
  cart: {
    items: 0
  }
};

export function cartReducer(
  state = initialState,
  action: CartsActions.All
): State {
  switch (action.type) {
    case CartActionTypes.CART_ITEM_INCREMENT: {
      const res = state.cart.items + 1;
      return Object.assign({}, state, { cart: {items: res}});
    }
    case CartActionTypes.CART_ITEM_DECREMENT: {
      const res = state.cart.items - 1;
      return Object.assign({}, state, { cart: {items: res}});
    }
    default: {
      return state;
    }
  }
}
