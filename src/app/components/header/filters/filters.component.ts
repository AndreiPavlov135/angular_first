import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateService } from 'src/app/core/results-block/services/date.service';
import { FiltersService } from 'src/app/core/results-block/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() isOpen!: boolean;
  public isButtonActive = false;
  public sortDate = false;
  constructor(
    private filtersService: FiltersService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {}

  public onInput(event: any): void {
    this.filtersService.inputCheck(event.target.value);
  }
  public onDate(): void {
    this.sortDate = !this.sortDate;
    this.dateService.sort(this.sortDate);
    this.isButtonActive = !this.isButtonActive;
  }
  public onReset(): void {
    this.dateService.reset();
  }
}
