import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolveImgUrlPipe } from '../pipes/resolve-img-url.pipe';
import { StyleDirectivDirective } from '../directives/style-directiv.directive';
import { SortingInputPipe } from '../pipes/sorting-input.pipe';
import { SortingDatePipe } from '../pipes/sorting-date.pipe';

@NgModule({
  declarations: [
    ResolveImgUrlPipe,
    StyleDirectivDirective,
    SortingInputPipe,
    SortingDatePipe,
  ],
  imports: [CommonModule],
  exports: [
    ResolveImgUrlPipe,
    StyleDirectivDirective,
    SortingInputPipe,
    SortingDatePipe,
  ],
})
export class SharedModule {}
