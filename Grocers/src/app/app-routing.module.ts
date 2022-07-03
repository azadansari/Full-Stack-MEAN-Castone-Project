import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-single', component: ProductSingleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ProductSingleComponent,
  HomeComponent,
  AboutComponent,
  ContactComponent,
  ShopComponent
]
