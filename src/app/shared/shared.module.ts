import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SelectComponent } from './components/select/select.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    BannerComponent,
    SelectComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule, NgbPaginationModule, LazyLoadImageModule],
  exports: [
    NavbarComponent,
    SpinnerComponent, NgbPaginationModule, FooterComponent, BannerComponent, SelectComponent, ProductCardComponent
  ]
})
export class SharedModule { }
