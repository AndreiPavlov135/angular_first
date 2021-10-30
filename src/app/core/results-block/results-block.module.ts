import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsBlockComponent } from './components/results-block/results-block.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { MatButtonModule } from '@angular/material/button';
import { StyleDirectivDirective } from 'src/app/directives/style-directiv.directive';
import { SortingInputPipe } from 'src/app/pipes/sorting-input.pipe';
import { SortingDatePipe } from 'src/app/pipes/sorting-date.pipe';

@NgModule({
  declarations: [
    ResultsBlockComponent,
    SearchItemComponent,
    StyleDirectivDirective,
    SortingInputPipe,
    SortingDatePipe,
  ],
  imports: [CommonModule, MatButtonModule],
  exports: [MatButtonModule],
})
export class ResultsBlockModule {}
