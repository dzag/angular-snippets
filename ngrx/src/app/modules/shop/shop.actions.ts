import { Action } from '@ngrx/store';
import { Item } from './item';

export enum ShopActionType {
  AddCartAction = '[Shop] Add Cart'
}

export class AddCartAction implements Action {
  type = ShopActionType.AddCartAction;

  constructor(public payload: { item: Item }) {
  }

}
