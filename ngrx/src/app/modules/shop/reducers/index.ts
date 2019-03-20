import { ActionReducerMap } from '@ngrx/store';
import * as fromItems from './items.reducer';
import * as fromRoot from '@app/reducers';

export interface State extends fromRoot.State {
  items: fromItems.State;
}

export const reducers: ActionReducerMap<State> = {
  items: fromItems.reducer,
};
