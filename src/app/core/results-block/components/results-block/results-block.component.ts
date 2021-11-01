import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/components/services/api.service';
import { ISearchItem } from 'src/app/models/search-item.model';
import { CheckInputService } from '../../services/check-input.service';
import { DateService } from '../../services/date.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss'],
})
export class ResultsBlockComponent implements OnInit {
  @Input() isShowDate!: boolean;
  @Input() isResetWorks!: boolean;

  public items!: ISearchItem[];
  public inputed$ = this.checkInputService.inputed$;
  public inputValue$ = this.filtersService.inputValue$;

  public sortByDate!: boolean;
  public reversDate!: boolean;

  constructor(
    private apiService: ApiService,
    private checkInputService: CheckInputService,
    private filtersService: FiltersService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.apiService.getYouTubeMoves().subscribe((response) => {
      this.items = response.items;
      console.log(response);
    });

    this.dateService.action$.subscribe((val) => {
      const { sortByDate, revers } = val;

      this.sortByDate = sortByDate;
      this.reversDate = revers;
    });
  }
}
