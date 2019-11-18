import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ViewComponentsRoutingModule } from './view-components-routing.module';
import { ViewComponentsComponent } from './view-components.component';

@NgModule({
  declarations: [ViewComponentsComponent],
  imports: [
    CommonModule,
    ViewComponentsRoutingModule,
    SharedModule
  ]
})
export class ViewComponentsModule { }
