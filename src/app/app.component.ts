import { Component, Inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material';
  constructor(private themeService: ThemeService,
    @Inject(DOCUMENT) private doc: Document) {

  }
  changeThemes(val: boolean) {
    const theme = val ? 'light' : 'dark';
    this.themeService.changeTheme(theme);
  }
  changeThemeRunTime(val: boolean) {
    this.doc.body.classList.toggle('dark', val)
  }
}
