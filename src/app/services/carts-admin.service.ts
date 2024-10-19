import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartsAdminService {

  constructor(private http: HttpClient) { }

  createCart(cartData: any) {
    return this.http.post(environment.baseApi, cartData);
  }
  getCartById(cartId: number) {
    return this.http.post(environment.baseApi + 'carts', cartId).pipe(
      tap(response => {
        console.log("Cart Details Response: ", response);
      })
    );
  }

  getAllCarts(param?: any) {
    let params = new HttpParams()
    params = params.append("startDate", param?.start).append("endDate", param?.end)
    return this.http.get(environment.baseApi + 'carts', { params: params })
  }

  deleteCart(id: number) {
    return this.http.delete(environment.baseApi + 'carts/' + id)
  }
}
