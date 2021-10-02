import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() inputClick = new EventEmitter<boolean>();
  @Output() inputValueChange = new EventEmitter<string>();
  @Output() clickDate = new EventEmitter<boolean>();
  @Output() clickReset = new EventEmitter<boolean>();
  isFiltersOpen = false;

  constructor() {}

  ngOnInit(): void {}
  onSettingsClick(): void {
    this.isFiltersOpen = !this.isFiltersOpen;
  }
  myInpytClick(isOpen: boolean): void {
    this.inputClick.next(isOpen);
  }
  myInputValue(event: string): void {
    this.inputValueChange.next(event);
  }
  myClickDate(event: boolean): void {
    this.clickDate.next(event);
  }
  myClickReset(event: boolean): void {
    this.clickReset.next(event);
  }
}
