import { Action } from '@ngrx/store';

export enum CartActionTypes {
  AddToCart = '[Cart] Add to cart',
}

export class AddToCartAction implements Action {
  readonly type = CartActionTypes.AddToCart;

  constructor(public payload: any
  ) {}
}

export type CartActions = AddToCartAction;
