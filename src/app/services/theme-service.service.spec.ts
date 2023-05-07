/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemeService } from './theme-service.service';


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
describe('Service: ThemeService', () => {
  let service: ThemeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Document],
      providers: [ThemeService]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should create default theme'), () => {

  }
});
