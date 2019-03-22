import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPortalExample, PortalExampleComponent } from './components/portal-example/portal-example.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayExampleComponent } from './components/overlay-example/overlay-example.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    PortalExampleComponent,
    ComponentPortalExample,
    OverlayExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    OverlayModule,
  ],
  entryComponents: [
    ComponentPortalExample,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
