import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() onInputValue = new EventEmitter<string>();
  @Output() onClickDate = new EventEmitter<boolean>();
  @Output() onClickReset = new EventEmitter<boolean>();
  @Input() isOpen!: boolean;
  public myClick = false;
  public myReset = false;
  constructor() {}

  ngOnInit(): void {}

  public onInput(event: any): void {
    const myValue = event.target.value;
    this.onInputValue.next(myValue);
  }
  public onDate(): void {
    this.myClick = !this.myClick;
    this.onClickDate.next(this.myClick);
  }
  public onReset(): void {
    this.myReset = !this.myReset;
    this.onClickReset.next(this.myReset);
  }
}
