import { Action } from '@ngrx/store';
import { Cart } from '../model/cart.model';

export enum CartActionTypes {
    CART_ITEM_INCREMENT = '[CART] ITEM INCREMENT',
    CART_ITEM_DECREMENT = '[CART] ITEM DECREMENT',
}

export function incrementCartItem(model: number) {
    return {
        type: CartActionTypes.CART_ITEM_INCREMENT,
        payload: model
    };
}
export function decrementCartItem(model: number) {
    return {
        type: CartActionTypes.CART_ITEM_DECREMENT,
        payload: model
    };
}

export class CartItemIcrementAction implements Action {
    readonly type = CartActionTypes.CART_ITEM_INCREMENT;
    constructor(public payload: Cart) { }
}
export class CartItemDecrementAction implements Action {
    readonly type = CartActionTypes.CART_ITEM_DECREMENT;
    constructor(public payload: Cart) { }
}



export type All =
    CartItemIcrementAction |
    CartItemDecrementAction;

