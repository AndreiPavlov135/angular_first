import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FiltersComponent } from './components/header/filters/filters.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderInputComponent } from './components/header/header-input/header-input.component';
import { HeaderSettingsComponent } from './components/header/header-settings/header-settings.component';
import { HeaderLoginComponent } from './components/header/header-login/header-login.component';
import { ResultsBlockComponent } from './components/results-block/results-block.component';
import { SortingInputPipe } from './pipes/sorting-input.pipe';
import { StyleDirectivDirective } from './directives/style-directiv.directive';
import { SortingDatePipe } from './pipes/sorting-date.pipe';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    FiltersComponent,
    HeaderLogoComponent,
    HeaderInputComponent,
    HeaderSettingsComponent,
    HeaderLoginComponent,
    ResultsBlockComponent,
    SortingInputPipe,
    StyleDirectivDirective,
    SortingDatePipe,
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
