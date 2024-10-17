import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
  dataId: any;
  data: any = {}
  loading: boolean = true

  constructor(private route: ActivatedRoute, private service: ProductsService) {
  }

  ngOnInit(): void {
    this.dataId = this.route.snapshot.paramMap.get('id');
    console.log(this.dataId);
    console.log(this.data);

    if (this.dataId) {
      this.getProduct()
    }
  }

  getProduct() {
    this.service.getProductById(this.dataId).subscribe(res => {
      this.data = res
      console.log(this.data);
      this.loading = false;
    }, err => {
      this.loading = false;
      alert(err)

    })
  }

  @Input() mydata: any = {}

  @Output() item = new EventEmitter()

  addButton: boolean = false
  amount: number = 1;


  add() {
    this.item.emit({ item: this.mydata, quantity: this.amount })
  }
}
