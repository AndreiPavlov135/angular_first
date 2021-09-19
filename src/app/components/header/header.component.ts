import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFiltersOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSettingsClick():void{
    
    this.isFiltersOpen = !this.isFiltersOpen;
    console.log(this.isFiltersOpen);
  }
}
