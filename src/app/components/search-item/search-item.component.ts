import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit, OnChanges {
  @Input() imgSrc!: string;
  @Input() view!: string;
  @Input() like!: string;
  @Input() disLike!: string;
  @Input() comment!: string;
  @Input() title!: string;
  @Input() publicDate!: string;

  public myDate!: number;
  constructor() {}

  ngOnInit(): void {
    this.myDate = Math.ceil(
      (new Date().getTime() - Date.parse(this.publicDate)) / (1000 * 3600 * 24)
    );
    console.log(this.myDate);
  }
  ngOnChanges() {}
}
