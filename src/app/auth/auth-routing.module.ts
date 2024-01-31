import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from '../reactive/pages/basic-page/basic-page.component';
import { DynamicPageComponent } from '../reactive/pages/dynamic-page/dynamic-page.component';
import { SwitchPageComponent } from '../reactive/pages/switch-page/switch-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path : 'sign-up',
    component : RegisterPageComponent,
  },
  {
    path : '**',
    redirectTo : 'sign-up'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
