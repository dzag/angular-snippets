import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppleRoutingModule } from './apple-routing.module';
import { AppleComponent } from './apple.component';
import { AppleListComponent } from './apple-list/apple-list.component';
import { LibsModule } from '../libs/libs.module';


@NgModule({
  declarations: [AppleComponent, AppleListComponent],
  imports: [
    CommonModule,
    AppleRoutingModule,
    LibsModule,
  ],
})
export class AppleModule { }
