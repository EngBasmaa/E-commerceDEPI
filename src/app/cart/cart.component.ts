import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = [];
  total: number = 0;
  success: boolean = false;

  constructor(private service: CartService, private router: Router) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotal();
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getCartTotal();
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  detectChange() {
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  getCartTotal() {
    this.total = 0;
    for (let item of this.cartProducts) {
      try {
        // Ensure the item and price are properly defined
        if (item && item.item && typeof item.item.price === 'number') {
          this.total += item.item.price * item.quantity;
        }
      } catch (error) {
        console.error('Error calculating cart total:', error);
      }
    }
  }

  addCart() {
    let products = this.cartProducts.map(item => {
      return { productId: item.item.id, quantity: item.quantity };
    });

    let Model = {
      userId: 5,
      date: new Date(),
      products: products
    };

    this.service.creatNewCart(Model).subscribe(
      res => {
        this.success = true;
        // Navigate to the checkout page

      },
      error => {
        console.error("There was an error!", error);
        alert("There was an error placing your order. Please try again.");
      }
    );

    console.log(Model);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);  // Navigate to the checkout page
  }
}
