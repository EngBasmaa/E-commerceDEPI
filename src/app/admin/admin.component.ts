import { Component, OnInit } from '@angular/core';
import { CartsAdminService } from '../services/carts-admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from '../products/components/models/cartItem';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/components/models/product';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  carts: any[] = [];
  products: any[] = []
  total: number = 0
  form!: FormGroup
  selectedCart: CartItem[] = [];
  details: any

  constructor(private service: CartsAdminService, private build: FormBuilder, private product_S: ProductsService) { }



  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: ['']
    })
    this.getAllCarts()
  }

  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res
    })
  }
  applyFilter() {
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res: any) => {
      this.carts = res
    })
  }

  // deleteCart(id: number) {
  //   this.service.deleteCart(id).subscribe(res => {
  //     this.getAllCarts()
  //     alert("Cart Deleted Successfully")
  //   })
  // }
  createCart() {
    const cartData = {
      userId: 1,
      products: this.selectedCart.map(item => ({
        productId: item.productId,
        quantity: item.quantity
      }))
    };
    this.service.createCart(cartData).subscribe(response => {
      console.log('Cart created successfully:', response);
      // Optionally fetch updated carts here
    }, error => {
      console.error('Error creating cart:', error);
      alert('Failed to create cart. Please check the data and try again.');
    });
  }

  deleteCart(id: number) {
    this.service.deleteCart(id).subscribe(res => {
      this.carts = this.carts.filter(cart => cart.id !== id);

      this.getAllCarts();

      alert("Cart Deleted Successfully");
    }, err => {
      console.error("Error deleting cart:", err);
      alert("Failed to delete cart. Please try again.");
    });
  }

  view(index: any) {
    this.products = []
    this.details = this.carts[index]
    console.log(this.details);
    for (let x in this.details.products) {
      this.product_S.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({ item: res, quantity: this.details.products[x].quantity });
      })
    }
  }



  getCartDetails(cartId: number) {
    this.service.getCartById(cartId).subscribe((res: any) => {
      this.selectedCart = res.products.map((item: any) => ({
        productId: item.productId,
        quantity: item.quantity
      }));

      // Fetch the product details for each product in the cart
      const productRequests = this.selectedCart.map(cartItem =>
        this.product_S.getProductById(cartItem.productId).toPromise()
      );

      // Use Promise.all to wait for all product details
      Promise.all(productRequests).then(products => {
        // Map products back to selectedCart
        this.selectedCart.forEach((cartItem, index) => {
          cartItem.product = products[index];  // Add product details to cart item
        });
        this.calculateTotal();  // Calculate total after fetching products
      });
    });
  }
  calculateTotal() {
    //   this.total = this.selectedCart.products.reduce((acc: number, item: any) => {
    //     return acc + (item.price * item.quantity);
    //   }, 0);
    this.total = this.selectedCart.reduce((acc: number, item: CartItem) => {
      const price = item.product?.price || 0;
      return acc + (price * item.quantity);
    }, 0);
  }



}
