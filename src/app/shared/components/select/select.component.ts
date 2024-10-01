import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() categories: string[] = []; // Array of categories passed from the parent component
  // @Input() displayedProducts: string[] = []; // Array of categories passed from the parent component
  @Output() categoryChanged: EventEmitter<string> = new EventEmitter<string>(); // Emit selected category to parent

  // Handle category change and emit the selected value
  onCategoryChange(event: Event): void {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.categoryChanged.emit(selectedCategory); // Emit the selected category to the parent component
  }
}