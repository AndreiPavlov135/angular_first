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
  @Input() sortByDate!: boolean;
  @Input() reversDate!: boolean;
  @Input() isShowDate!: boolean;
  @Input() isResetWorks!: boolean;

  public items!: ISearchItem[];
  public inputed$ = this.checkInputService.inputed$;
  public inputValue$ = this.filtersService.inputValue$;
  public sorted$ = this.dateService.sorted$;
  public reseted$ = this.dateService.reseted$;

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

    this.sorted$.subscribe((val) => {
      if (val === null) {
        this.sortByDate = false;
      } else {
        this.sortByDate = true;
      }
    });

    this.reseted$.subscribe(() => {
      this.sortByDate = false;
    });
  }
  ngOnChanges(): void {}
}
