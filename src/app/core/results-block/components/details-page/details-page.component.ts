import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/components/services/api.service';
import { ISearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  public item!: ISearchItem;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params.id),
        switchMap((id) => this.apiService.getItemById(id)),
        tap((resp) => {
          this.item = resp.items[0];
        })
      )
      .subscribe();
  }
}
