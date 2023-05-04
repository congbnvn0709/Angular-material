import { Component, OnInit } from '@angular/core';
import {CutomThemeService} from "../../services/cutom-theme.service";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor(private service :CutomThemeService) { }

  ngOnInit(): void {
    
  }

}
