import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material';
  constructor(private themeService: ThemeService) {

  }
  changeThemes(val: boolean) {
    const theme = val ? 'light' : 'dark';
    this.themeService.changeTheme(theme);
  }
}
