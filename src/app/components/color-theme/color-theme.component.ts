import {Component, OnInit} from '@angular/core';
import {ThemeServiceRuntimeService} from "../../services/theme-service-runtime.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-color-theme',
  templateUrl: './color-theme.component.html',
  styleUrls: ['./color-theme.component.scss']
})
export class ColorThemeComponent implements OnInit {
  colorSelect = {...this.service.themeSelect.value};

  constructor(private service: ThemeServiceRuntimeService,
  ) {
  }

  ngOnInit(): void {
  }
  submitColor(form:NgForm){
    this.service.setTheme(form.value)
  }
}
