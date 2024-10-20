import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SelectComponent } from '../shared/components/select/select.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    SelectComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule],
  exports: [
    SpinnerComponent,
    SelectComponent,
    FooterComponent,
    NavbarComponent

  ]
})
export class SharedModule { }
