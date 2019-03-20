import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopModule } from './modules/shop/shop.module';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => ShopModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
