import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-input',
  templateUrl: './header-input.component.html',
  styleUrls: ['./header-input.component.scss']
})
export class HeaderInputComponent implements OnInit {
  @Output() inputClick = new EventEmitter<boolean>();
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  constructor() {
   
  }

  ngOnInit(): void {
  }
  public onInputClick(event: Event): void{
    event.preventDefault();
    if(this.input.nativeElement.value){ 
      this.inputClick.next(true);
      //console.log(this.input.nativeElement)
    }
  }
}
