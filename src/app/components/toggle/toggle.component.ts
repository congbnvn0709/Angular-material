import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  checked = true;
  disabled = false;
  @Input() text = 'Toggle theme!'
  @Output() emitChangTheme = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeTheme(theme: MatSlideToggleChange) {
    this.emitChangTheme.emit(theme.checked)
  }
}
