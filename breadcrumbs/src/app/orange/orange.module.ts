import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrangeRoutingModule } from './orange-routing.module';
import { OrangeComponent } from './orange.component';
import { LemonComponent } from './lemon/lemon.component';
import { CitrusComponent } from './citrus/citrus.component';
import { LibsModule } from '../libs/libs.module';


@NgModule({
  declarations: [OrangeComponent, LemonComponent, CitrusComponent],
  imports: [
    CommonModule,
    OrangeRoutingModule,
    LibsModule,
  ],
})
export class OrangeModule { }
