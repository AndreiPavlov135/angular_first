import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() inputClick = new EventEmitter<boolean>();
  @Output() onInputValue = new EventEmitter<string>();
  @Output() appClickDate = new EventEmitter<boolean>();
  @Output() appClickReset = new EventEmitter<boolean>();
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
    this.onInputValue.next(event);
  }
  myClickDate(event: boolean): void {
    this.appClickDate.next(event);
  }
  myClickReset(event: boolean): void {
    this.appClickReset.next(event);
  }
}
