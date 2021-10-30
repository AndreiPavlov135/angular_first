import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CheckInputService } from 'src/app/core/results-block/services/check-input.service';

@Component({
  selector: 'app-header-input',
  templateUrl: './header-input.component.html',
  styleUrls: ['./header-input.component.scss'],
})
export class HeaderInputComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  constructor(private checkInputService: CheckInputService) {}

  ngOnInit(): void {}
  public onInputClick(event: Event): void {
    event.preventDefault();
    if (this.input.nativeElement.value) {
      this.checkInputService.check();
    }
  }
}
