import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from './guards/main.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [{ path: '', component: LoginPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
