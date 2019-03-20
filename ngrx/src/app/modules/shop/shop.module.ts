import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopMainComponent } from './shop-main.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/modules/shop/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SHOP_EFFECTS } from '@app/modules/shop/effects';

@NgModule({
  declarations: [
    ShopMainComponent,
    CartComponent,
    ItemListComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature(SHOP_EFFECTS),
  ],
  providers: [
    ...SHOP_EFFECTS,
  ]
})
export class ShopModule {}
