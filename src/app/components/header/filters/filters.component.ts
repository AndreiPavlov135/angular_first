import { Component, Input } from '@angular/core';
import { DateService } from 'src/app/core/results-block/services/date.service';
import { FiltersService } from 'src/app/core/results-block/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() isOpen!: boolean;
  public sortDateActive = false;

  private revers = false;

  constructor(
    private filtersService: FiltersService,
    private dateService: DateService
  ) {}

  public onInput(event: any): void {
    this.filtersService.inputCheck(event.target.value);
  }

  public onDate(): void {
    if (!this.sortDateActive) {
      this.sortDateActive = !this.sortDateActive;
      this.dateService.sortByDate(this.sortDateActive);
    } else {
      this.revers = !this.revers;
      this.dateService.revers(this.revers);
    }
  }
  public onReset(): void {
    this.sortDateActive = false;
    this.dateService.reset();
  }
}
