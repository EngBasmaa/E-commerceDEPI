import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { AllProductsComponent } from './components/all-products/all-products.component';


@NgModule({
  declarations: [

    ProductsDetailsComponent, AllProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
  , exports: [
    ProductsDetailsComponent, AllProductsComponent
  ]
})
export class ProductsModule { }
