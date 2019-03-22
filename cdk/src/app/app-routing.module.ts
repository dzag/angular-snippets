import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalExampleComponent } from './components/portal-example/portal-example.component';
import { OverlayExampleComponent } from './components/overlay-example/overlay-example.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalExampleComponent,
  },
  {
    path: 'overlay',
    component: OverlayExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
