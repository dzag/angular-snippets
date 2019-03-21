import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CalculateCartAction, CartActionTypes } from '@app/modules/shop/actions/cart.actions';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class CartEffects {

  private modifyingActions = [
    CartActionTypes.AddToCart,
    CartActionTypes.DecreaseItem,
    CartActionTypes.DeleteItem,
  ];

  constructor(private actions: Actions,
  ) { }

  @Effect()
  get modifyCart() {
    return this.actions.pipe(
      ofType(...this.modifyingActions),
      mapTo(new CalculateCartAction())
    );
  }

}
