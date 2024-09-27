import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
