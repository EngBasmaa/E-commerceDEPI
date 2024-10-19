import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  // Get items from localStorage
  getCartItems(): any[] {
    let cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }



  // Add new cart items to server
  creatNewCart(Model: any): Observable<any> {
    const cartData = {
      userId: Model.userId, // Ensure this field exists
      products: Model.products // Ensure this is an array of products
    };
    return this.http.post(environment.baseApi + 'carts', cartData);
  }
  // Remove an item from the cart
  removeCartItem(item: any) {
    let cartItems = this.getCartItems();
    const index = cartItems.findIndex((i: any) => i.id === item.id);
    if (index > -1) {
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }

  // Update the quantity of an item
  updateItemQuantity(item: any, quantity: number) {
    let cartItems = this.getCartItems();
    const index = cartItems.findIndex((i: any) => i.id === item.id);
    if (index > -1) {
      cartItems[index].quantity = quantity;
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }

  // Get total price of items in cart
  getCartTotal(): number {
    let cartItems = this.getCartItems();
    return cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  }

  // Clear the entire cart
  clearCart() {
    localStorage.removeItem('cart');
  }

  getCartById(cartId: number) {
    return this.http.get(`${environment.baseApi}carts/${cartId}`);
  }


}
