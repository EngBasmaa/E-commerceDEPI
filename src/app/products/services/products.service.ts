import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // getAllCategories() {
  //   return this.http.get(environment.baseApi + 'products/categories')

  // }

  // getProductsByCategory(keyword: string) {
  //   return this.http.get(environment.baseApi + 'products/category/' + keyword)

  // }
  // ............

  getAllProducts(): Observable<any> {
    return this.http.get(environment.baseApi + 'products')

  }

  getAllCategories(): Observable<any> {
    return this.http.get(environment.baseApi + 'products/categories')

  }

  getProductsByCategory(keyword: string): Observable<any> {
    return this.http.get(environment.baseApi + 'products/category/' + keyword)

  }
}
