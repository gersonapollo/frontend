import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// tslint:disable: typedef
const routes: Routes = [
  { path: '', redirectTo: 'expenses-requests', pathMatch: 'full' },
  {
    path: 'components',
    loadChildren: () => import('./view-components/view-components.module').then(m => m.ViewComponentsModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
