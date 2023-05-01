import { MatFormFieldModule } from '@angular/material/form-field';
import { ShowErrorComponent } from './show-error.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ShowErrorComponent],
  exports: [ShowErrorComponent],
  imports: [CommonModule, MatFormFieldModule]
})
export class ShowErrorModule { }
