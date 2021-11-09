import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/components/services/api.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() view!: string;
  @Input() like!: string;
  @Input() disLike!: string;
  @Input() comment!: string;
  @Input() title!: string;
  @Input() publicDate!: string;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItemById(3300107).subscribe((resp) => {
      console.log(resp);
    });
  }
}
