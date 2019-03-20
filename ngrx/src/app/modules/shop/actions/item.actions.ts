import { Action } from '@ngrx/store';
import { ShopItem } from '../components/shop.models';

export enum ItemActionTypes {
  FetchItems = '[Item] Fetch items',
  StoreItems = '[Item] Store items to NgRx'
}

export class FetchItemAction implements Action {
  readonly type = ItemActionTypes.FetchItems;
}

export class StoreItemAction implements Action {
  readonly type = ItemActionTypes.StoreItems;

  constructor(public payload: ShopItem[]) {
  }
}

export type ItemActions = FetchItemAction | StoreItemAction;
