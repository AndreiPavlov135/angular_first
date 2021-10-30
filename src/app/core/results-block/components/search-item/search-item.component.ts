import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() view!: string;
  @Input() like!: string;
  @Input() disLike!: string;
  @Input() comment!: string;
  @Input() title!: string;
  @Input() publicDate!: string;

  constructor() {}

  ngOnInit(): void {}
}
