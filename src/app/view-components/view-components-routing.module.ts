import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponentsComponent } from './view-components.component';

const routes: Routes = [{ path: '', component: ViewComponentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewComponentsRoutingModule { }
