import { ActionReducerMap } from '@ngrx/store';
import { itemReducer, ItemState } from './item.reducer';

export interface ShopState {
  items: ItemState;
}

export const reducers: ActionReducerMap<ShopState> = {
  items: itemReducer
};
