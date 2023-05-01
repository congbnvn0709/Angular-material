import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
type Theme = 'light' | 'dark'
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: Theme = 'light';
  constructor(
    // private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: Document) { this.initialize() }

  initialize() {
    this.theme = (localStorage.getItem('appTheme') || 'light') as Theme;
    this.changeTheme(this.theme)
  }
  changeTheme(theme: Theme) {
    this.removeAllTheme();
    this.storageTheme(theme);
    this.attactTheme(theme);
  }
  attactTheme(theme: Theme) {
    const url = `${theme}-theme.css`;
    const link = this.doc.createElement('link') as HTMLLinkElement;
    link.href = url;
    link.rel = 'styleSheet';
    link.className = 'theme-app';
    const head = this.doc.querySelector('head');
    head?.appendChild(link);
  }
  storageTheme(theme: Theme) {
    localStorage.setItem('appTheme', theme);
  }
  removeAllTheme() {
    const theme = Array.from(this.doc.querySelectorAll('.theme-app'));
    theme.forEach(item => item.remove())
  }
}
