import { ActionReducer } from '@ngrx/store';

import { CartActions, CartActionTypes } from '@app/modules/shop/actions/cart.actions';

export interface CartState {
  empty: boolean;
  items: { id: number, count: number }[];
  total: number;
}

export const initialState: CartState = {
  empty: true,
  items: [],
  total: 0,
};

export const cartReducer: ActionReducer<CartState, CartActions> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.AddToCart:
      const itemId = action.payload.itemId;

      const foundItemIndex = state.items
        .findIndex(i => i.id === itemId);

      const items = [...state.items];

      if (foundItemIndex < 0) {
        items.push({ id: itemId, count: 1 });
      } else {
        const foundItem = { ...state.items[foundItemIndex] };
        foundItem.count++;

        items[foundItemIndex] = foundItem;
      }

      const total = items.reduce((prev, current) => current.count + prev, 0);

      return {
        ...state,
        items,
        empty: !items.length,
        total,
      };
    default:
      return state;
  }
};
