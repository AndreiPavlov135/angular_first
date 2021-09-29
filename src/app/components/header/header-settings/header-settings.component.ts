import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-settings',
  templateUrl: './header-settings.component.html',
  styleUrls: ['./header-settings.component.scss'],
})
export class HeaderSettingsComponent implements OnInit {
  @Output() settingsClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.settingsClick.next();
  }
}
