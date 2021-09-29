import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss'],
})
export class ResultsBlockComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() isShowItems = false;
  @Input() isFiltersWorks!: string;
  @Input() sortByDate!: boolean;
  @Input() reversDate!: boolean;
  @Input() isShowDate!: boolean;
  @Input() isResetWorks!: boolean;

  public items!: ISearchItem[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getYouTubeMoves().subscribe((response) => {
      this.items = response.items;
      console.log(response);
    });
  }

  ngOnChanges(): void {
    if (this.isShowDate === undefined) {
      this.sortByDate = false;
    }
    if (this.isShowDate) {
      this.reversDate = !this.reversDate;
      this.sortByDate = this.isResetWorks ? false : true;
    }
    if (this.isShowDate === false) {
      this.reversDate = !this.reversDate;
      this.sortByDate = this.isResetWorks ? false : true;
    }
  }
  ngAfterViewInit(): void {}
}
