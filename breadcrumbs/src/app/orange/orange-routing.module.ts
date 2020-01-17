import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrangeComponent } from './orange.component';
import { CitrusComponent } from './citrus/citrus.component';
import { LemonComponent } from './lemon/lemon.component';


const routes: Routes = [
  {
    path: '',
    component: OrangeComponent,
    children: [
      {
        path: 'citrus',
        component: CitrusComponent,
      },
      {
        path: 'lemon',
        component: LemonComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrangeRoutingModule { }
