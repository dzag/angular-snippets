import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMapTo } from 'rxjs/operators';

import { ShopService } from '@app/modules/shop/shop.service';
import { ItemActionTypes, StoreItemAction } from '@app/modules/shop/actions/item.actions';

@Injectable()
export class ItemEffects {

  constructor(private actions: Actions,
              private shopService: ShopService,
  ) { }

  @Effect()
  get fetchItems() {
    return this.actions.pipe(
      ofType(ItemActionTypes.FetchItems),
      switchMapTo(this.shopService.getItems()),
      map(items => new StoreItemAction(items)),
    );
  }
}
