import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from './auth/guards/main.guard';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { DetailsPageComponent } from './core/results-block/components/details-page/details-page.component';
import { ResultsBlockComponent } from './core/results-block/components/results-block/results-block.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: ResultsBlockComponent, canActivate: [MainGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
  { path: 'details-page/:id', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
