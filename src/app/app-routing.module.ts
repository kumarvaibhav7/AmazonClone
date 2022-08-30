import { NgModule } from '@angular/core';
import { GuardsCheckEnd, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardsGuard } from './guards.guard';
import { CartComponent } from './home/cart/cart.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { DataResolver, DataResolver2, DataResolver3, DataResolver4, DataResolver5 } from './home/data.resolver';
import { CarouselComponent } from './home/homepage/carousel/carousel.component';
// import { GuardsGuard } from './guards.guard';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SearchComponent } from './home/search/search.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: ':id', component: HomepageComponent,
    // canDeactivate:[GuardsGuard]
    children: [
      {
        path: 'profile', component: ProfileComponent,
        resolve: { userlist: DataResolver }
      },
      {
        path: 'home', component: CarouselComponent,
        resolve: { carouselimage: DataResolver2, productdata: DataResolver3 }
      },
      {
        path: 'cart', component: CartComponent,
        resolve: { cartcontent: DataResolver4 },
        canDeactivate: [GuardsGuard]
      },
      {
        path: 'search', component: SearchComponent,
        resolve: { productsdata: DataResolver3 }
      },
      {
        path: 'checkout', component: CheckoutComponent,
        resolve: { cartdata: DataResolver5, user: DataResolver }
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
