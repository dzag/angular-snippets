import { ActionReducer } from '@ngrx/store';
import { mapKeys } from 'lodash';

import { ItemActions, ItemActionTypes } from '../actions/item.actions';
import { ShopItem } from '../components/shop.models';

export interface ItemState {
  [p: string]: ShopItem;
}

export const initialState: ItemState = {};

export const itemReducer: ActionReducer<ItemState, ItemActions> = (state = initialState, action) => {
  switch (action.type) {
    case ItemActionTypes.StoreItems:
      return mapKeys(action.payload, 'id');
    default:
      return state;
  }
};
