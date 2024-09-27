import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AllProductsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule],
  exports: [
    NavbarComponent,
    AllProductsComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
