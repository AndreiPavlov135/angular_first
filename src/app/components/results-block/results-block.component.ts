import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss'],
})
export class ResultsBlockComponent implements OnInit {
  @Input() isShowItems = false;
  @Input() isFiltersWorks!: string;

  public items!: ISearchItem[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getYouTubeMoves().subscribe((response) => {
      this.items = response.items;
      console.log(response);
    });
  }
}
