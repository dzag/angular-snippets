import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopMainComponent } from './shop-main.component';

const routes: Routes = [
  {
    path: '',
    component: ShopMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
