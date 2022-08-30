import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './homepage/products/products.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { DataResolver, DataResolver2, DataResolver3, DataResolver4, DataResolver5 } from './data.resolver';




@NgModule({
  declarations: [
    HomepageComponent,
    ProfileComponent,
    ProductsComponent,
    CarouselComponent,
    CartComponent,
    SearchComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [DataResolver,DataResolver2,DataResolver3,DataResolver4,DataResolver5],
  exports:[
    HomepageComponent
  ]
})
export class HomeModule { }
