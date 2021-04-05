import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  currentInputValue: string = '';
  @Output() inputChanged = new EventEmitter<string>();

  onClick() {
    alert(this.currentInputValue);
    this.inputChanged.emit(this.currentInputValue);
  }

  onInputChange(event: any) {
    this.currentInputValue = event.target.value;
  }
}
