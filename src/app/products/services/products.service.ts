import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../components/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products')

  }

  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories')
  }

  getProductsByCategory(keyword: string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyword)
  }
  // getProductById(id: any) {
  //   // return this.http.get(environment.baseApi + 'products/' + id)
  //   const url = `${environment.baseApi}/${id}`;
  //   return this.http.get(url);
  // }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseApi}products/${id}`);
  }
}
