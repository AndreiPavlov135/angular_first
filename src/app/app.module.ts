import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import {FiltersComponent} from './components/header/filters/filters.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderInputComponent } from './components/header/header-input/header-input.component';
import { HeaderSettingsComponent } from './components/header/header-settings/header-settings.component';
import { HeaderLoginComponent } from './components/header/header-login/header-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    SearchItemComponent,
    FiltersComponent,
    HeaderLogoComponent,
    HeaderInputComponent,
    HeaderSettingsComponent,
    HeaderLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
