import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() inputValueChange = new EventEmitter<string>();
  @Output() clickDate = new EventEmitter<boolean>();
  @Output() clickReset = new EventEmitter<boolean>();
  @Input() isOpen!: boolean;
  public myClick = false;
  public myReset = false;
  constructor() {}

  ngOnInit(): void {}

  public onInput(event: any): void {
    const myValue = event.target.value;
    this.inputValueChange.next(myValue);
  }
  public onDate(): void {
    this.myClick = !this.myClick;
    this.clickDate.next(this.myClick);
  }
  public onReset(): void {
    this.myReset = !this.myReset;
    this.clickReset.next(this.myReset);
  }
}
