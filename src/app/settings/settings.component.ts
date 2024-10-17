import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings = {
    notifications: true,
    darkMode: false,
    language: 'English'
  };

  constructor() { }

  ngOnInit() {
  }

  onNotificationChange(value: boolean) {
    this.settings.notifications = value;
    // TODO: Implement notification settings change
  }

  onDarkModeChange(value: boolean) {
    this.settings.darkMode = value;
    // TODO: Implement dark mode toggle
  }

  onLanguageChange(value: string) {
    this.settings.language = value;
    // TODO: Implement language change
  }
}