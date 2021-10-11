import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from './auth/guards/main.guard';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { FiltersComponent } from './components/header/filters/filters.component';

import { ErrorPageComponent } from './core/pages/error-page/error-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: FiltersComponent, canActivate: [MainGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
