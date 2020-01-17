import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple.component';
import { AppleListComponent } from './apple-list/apple-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppleComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: AppleListComponent,
        children: [
          {
            path: 'orange',
            loadChildren: () => import('../orange/orange.module').then(m => m.OrangeModule),
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppleRoutingModule { }
