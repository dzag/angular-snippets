import { Action } from '@ngrx/store';
import { Item } from '../item';

export interface State {
  items: Item[];
}

export const initialState: State = {
  items: [],
};

export function reducer(
  state = initialState,
  action: Action
) {
  return {
    ...state
  };
}
