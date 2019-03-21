import { Action } from '@ngrx/store';

export enum CartActionTypes {
  AddToCart = '[Cart] Add to cart',
  DecreaseItem = '[Cart] Decrease item',
  DeleteItem = '[Cart] Delete item',
  _Calculate = '[Cart] Calculate'
}

export class AddToCartAction implements Action {
  readonly type = CartActionTypes.AddToCart;

  constructor(public payload: {itemId: any}) {}
}

export class DecreaseAction implements Action {
  readonly type = CartActionTypes.DecreaseItem;

  constructor(public payload: {itemId: any}) {}
}

export class DeleteAction implements Action {
  readonly type = CartActionTypes.DeleteItem;

  constructor(public payload: {itemId: any}) {}
}

export class CalculateCartAction implements CalculateCartAction {
  readonly type = CartActionTypes._Calculate;
}

export type CartActions = AddToCartAction | DecreaseAction | DeleteAction | CalculateCartAction;
