import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
  host: {
    'class': 'mat-form-field-subscript-wrapper'
  }
})
export class ShowErrorComponent {
  @Input() control: AbstractControl = new FormControl('')
  @Input() controlName = '';

  get keyError() {
    return (this.control && this.control.errors) ? Object.keys(this.control.errors)[0] : ''
  }

}
