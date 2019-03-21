import { ActionReducer } from '@ngrx/store';
import { pull } from 'lodash';

import { CartActions, CartActionTypes } from '../actions/cart.actions';

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
      return addToCart(state, action.payload);
    case CartActionTypes.DecreaseItem:
      return decreaseItem(state, action.payload);
    case CartActionTypes.DeleteItem:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.itemId)
      };
    case CartActionTypes._Calculate:
      return {
        ...state,
        empty: !state.items.length,
        total: state.items
          .reduce((prev, current) => current.count + prev, 0),
      };
    default:
      return state;
  }
};

function addToCart(state: CartState, payload: any): CartState {
  const itemId = payload.itemId;

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

  return {
    ...state,
    items,
  };
}

function decreaseItem(state: CartState, payload: any): CartState {
  const itemId = payload.itemId;
  const items = [...state.items];

  const foundItem = items
    .find(i => i.id === itemId);

  if (!foundItem) {
    return state;
  }

  foundItem.count--;

  if (!foundItem.count) {
    pull(items, foundItem);
  }

  return {
    ...state,
    items,
  };
}
