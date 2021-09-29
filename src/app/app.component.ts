import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-project';

  isItemsOpen = false;
  inputContent!: string;
  isDateFilters!: boolean;
  isReset!: boolean;
  onInputClick(isOpen: boolean): void {
    this.isItemsOpen = isOpen;
  }

  onInputFilters(event: string): void {
    this.inputContent = event;
  }
  onDateFilters(isDate: boolean): void {
    this.isDateFilters = isDate;
  }
  onClickReset(clickReset: boolean): void {
    this.isReset = clickReset;
  }
}
