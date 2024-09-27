import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: "products", component: AllProductsComponent },
  { path: "details", component: ProductsDetailsComponent },
  { path: "cart", component: CartComponent },

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: "**", component: HomeComponent, pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
