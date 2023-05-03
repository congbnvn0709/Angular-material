import { ButtonModule } from './components/button/button.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleModule } from './components/toggle/toggle.module';
import {ColorThemeModule} from "./components/color-theme/color-theme.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToggleModule,
    ButtonModule,
    ColorThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
