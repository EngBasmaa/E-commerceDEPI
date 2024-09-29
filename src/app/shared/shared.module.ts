import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule],
  exports: [
    NavbarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
