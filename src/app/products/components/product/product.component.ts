import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() data: any = {}

  @Output() item = new EventEmitter()

  addButton: boolean = false
  amount: number = 1;

  constructor() { }

  ngOnInit(): void {

  }

  add() {
    this.item.emit({ item: this.data, quantity: this.amount })
  }
}