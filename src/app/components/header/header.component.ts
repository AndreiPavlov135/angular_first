import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() inputClick = new EventEmitter<boolean>();
  @Output() onInputValue = new EventEmitter<string>();
  isFiltersOpen = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSettingsClick():void{
    this.isFiltersOpen = !this.isFiltersOpen;
    console.log(this.isFiltersOpen);
  }
  myInpytClick(isOpen: boolean):void{
    this.inputClick.next(isOpen);
  }
  myInputValue(event: string):void {
    this.onInputValue.next(event);
    //console.log(event, 'new');
  }
}
