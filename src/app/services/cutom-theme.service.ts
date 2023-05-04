import {Inject, Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as tinycolor from 'tinycolor2';
import {DOCUMENT} from "@angular/common";
export interface Theme {
  primary: string;
  accent: string;
  warn: string;
}

interface Color {
  name: string;
  hex: string;
  isDarkContrast: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CutomThemeService {
  themeSelect = new BehaviorSubject<Theme>({
    primary: '',
    accent: '',
    warn: ''
  })
  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.getDefaultTheme();
  }

  getDefaultTheme(){
    const storageTheme = localStorage.getItem('ngvn-theme');
    if (storageTheme) {
      this.themeSelect.next(JSON.parse(storageTheme));
      this._updateThemeVariables(JSON.parse(storageTheme))
      return;
    }

    this.themeSelect.next({
      primary: '#2c7be5',
      accent: '#05d27a',
      warn: '#e63757',
    });
  }
  private _updateThemeVariables(theme: Theme) {
    for (const [name, color] of Object.entries(theme)) {
      const palette = computeColors(color);
      for (const variant of palette) { // 50, 100, 200, 300
        this.document.documentElement.style.setProperty(
          `--${name}-${variant.name}`, // primary-50, primary-100
          variant.hex
        );
        this.document.documentElement.style.setProperty(
          `--${name}-contrast-${variant.name}`,
          variant.isDarkContrast ? '#000' : '#fff'
        );
      }
    }
  }
}
// users will pick this hex from ColorPicker
function computeColors(hex: string): Color[] {
  return [
    getColorObject(tinycolor(hex).lighten(52), '50'),
    getColorObject(tinycolor(hex).lighten(37), '100'),
    getColorObject(tinycolor(hex).lighten(26), '200'),
    getColorObject(tinycolor(hex).lighten(12), '300'),
    getColorObject(tinycolor(hex).lighten(6), '400'),
    getColorObject(tinycolor(hex), '500'),
    getColorObject(tinycolor(hex).darken(6), '600'),
    getColorObject(tinycolor(hex).darken(12), '700'),
    getColorObject(tinycolor(hex).darken(18), '800'),
    getColorObject(tinycolor(hex).darken(24), '900'),
    getColorObject(tinycolor(hex).lighten(50).saturate(30), 'a100'),
    getColorObject(tinycolor(hex).lighten(30).saturate(30), 'a200'),
    getColorObject(tinycolor(hex).lighten(10).saturate(15), 'a400'),
    getColorObject(tinycolor(hex).lighten(5).saturate(5), 'a700'),
  ];
}

function getColorObject(value: tinycolor.Instance, name: string): Color {
  const c = tinycolor(value);
  return {
    name,
    hex: c.toHexString(),
    isDarkContrast: c.isLight(),
  };
}
