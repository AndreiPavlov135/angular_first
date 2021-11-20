import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { ResultsBlockModule } from './results-block/results-block.module';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [CommonModule, RouterModule, ResultsBlockModule],
  exports: [],
})
export class CoreModule {}
