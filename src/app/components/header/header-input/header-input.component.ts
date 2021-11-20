import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CheckInputService } from 'src/app/core/results-block/services/check-input.service';
import { SearchService } from 'src/app/core/results-block/services/search.service';

@Component({
  selector: 'app-header-input',
  templateUrl: './header-input.component.html',
  styleUrls: ['./header-input.component.scss'],
})
export class HeaderInputComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor(
    private checkInputService: CheckInputService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {}
  public onInputClick(event: Event): void {
    event.preventDefault();
    const inputValue = this.input.nativeElement.value;
    if (inputValue) {
      this.searchService.inputSearch(inputValue);
      this.checkInputService.check();
    }
  }
}
