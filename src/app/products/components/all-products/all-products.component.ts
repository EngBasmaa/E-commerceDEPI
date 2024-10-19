import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false
  cartProducts: any[] = [];


  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.loading = true
      this.products = res
      this.loading = false
    }, error => {
      this.loading = false
      alert(error)
    })
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res: any) => {
      console.log(res)
      this.categories = res
      this.loading = false
    }, error => {
      this.loading = false
      alert(error)
    })
  }

  receiveCategory(event: any) {
    let value = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsByCategory(value)
  }

  getProductsByCategory(keyword: string) {
    this.loading = true
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false
      this.products = res
    })
  }


  addToCart(event: any) {
    // JSON.stringify() // when send data
    // JSON.parse() // when receive data

    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)

      let exist = this.cartProducts.find(item => item.item.id === event.item.id)
      if (exist) {
        alert("Product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }

    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))

    }
  }

}
