import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() onInputValue = new EventEmitter<string>();
  @Input() isOpen!: boolean;
  constructor() {}

  ngOnInit(): void {}

  public onInput(event: any): void {
    const myValue = event.target.value;
    this.onInputValue.next(myValue);
  }
}
