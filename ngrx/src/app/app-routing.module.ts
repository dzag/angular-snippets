import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopModule } from './modules/shop/shop.module';
import { TableModule } from '@app/modules/table/table.module';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => ShopModule
  },
  {
    path: 'table',
    loadChildren: () => TableModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
