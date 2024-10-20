import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() title: string = ''
  @Input() data: any = []

  @Output() selectedValue = new EventEmitter()


  detectChange(event: any) {
    this.selectedValue.emit(event)
  }
}
