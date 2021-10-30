import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/header/filters/filters.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderInputComponent } from './components/header/header-input/header-input.component';
import { HeaderSettingsComponent } from './components/header/header-settings/header-settings.component';
import { HeaderLoginComponent } from './components/header/header-login/header-login.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    HeaderLogoComponent,
    HeaderInputComponent,
    HeaderSettingsComponent,
    HeaderLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    NoopAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
