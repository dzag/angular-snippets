import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfTopScrollComponent } from './inf-top-scroll/inf-top-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    InfTopScrollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
