import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopMainComponent } from './shop-main.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/modules/shop/reducers';

@NgModule({
  declarations: [
    ShopMainComponent,
    CartComponent,
    ItemListComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', reducers)
  ]
})
export class ShopModule {}
