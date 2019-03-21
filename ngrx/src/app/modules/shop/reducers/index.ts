import { ActionReducerMap } from '@ngrx/store';
import { itemReducer, ItemState } from './item.reducer';
import { cartReducer, CartState } from '@app/modules/shop/reducers/cart.reducer';

export interface ShopState {
  items: ItemState;
  cart: CartState;
}

export const reducers: ActionReducerMap<ShopState> = {
  items: itemReducer,
  cart: cartReducer,
};
