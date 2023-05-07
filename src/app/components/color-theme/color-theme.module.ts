import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorThemeComponent } from './color-theme.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ColorThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[ColorThemeComponent]
})
export class ColorThemeModule { }
