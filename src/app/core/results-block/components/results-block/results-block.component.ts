import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/components/services/api.service';
import { ISearchItem } from 'src/app/models/search-item.model';
import { CheckInputService } from '../../services/check-input.service';
import { DateService } from '../../services/date.service';
import { FiltersService } from '../../services/filters.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss'],
})
export class ResultsBlockComponent implements OnInit {
  public items!: ISearchItem[];
  public inputed$ = this.checkInputService.inputed$;
  public inputValue$ = this.filtersService.inputValue$;
  public searchValue$ = this.searchService.searchValue$;

  public sortByDate!: boolean;
  public reversDate!: boolean;
  private searchText!: string;

  constructor(
    private apiService: ApiService,
    private checkInputService: CheckInputService,
    private filtersService: FiltersService,
    private dateService: DateService,
    private searchService: SearchService
  ) {}

  public viewResultsBlock(cont: string): void {
    this.apiService.getYouTubeMoves(cont).subscribe((response) => {
      this.items = response.items;
      console.log(this.items);
    });
  }

  ngOnInit(): void {
    this.searchValue$.subscribe((val) => {
      this.searchText = val;
    });

    this.inputed$.subscribe((val) => {
      if (val) {
        this.viewResultsBlock(this.searchText);
      }
    });
    this.dateService.action$.subscribe((val) => {
      const { sortByDate, revers } = val;

      this.sortByDate = sortByDate;
      this.reversDate = revers;
    });
  }
}
