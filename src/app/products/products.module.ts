import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [

    ProductsDetailsComponent,
    ProductComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, RouterLink
  ]
})
export class ProductsModule { }
