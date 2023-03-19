import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ComboComponent } from './combo/combo.component';
import { ContactComponent } from './contact/contact.component';
import { DryFruitsComponent } from './dry-fruits/dry-fruits.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GreenVegitablesComponent } from './green-vegitables/green-vegitables.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ShopComponent } from './shop/shop.component';
import { VegitablesComponent } from './vegitables/vegitables.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-single', component: ProductSingleComponent},
  {path: 'vegitables', component: VegitablesComponent},
  {path: 'grvegitables', component: GreenVegitablesComponent},
  {path: 'fruits', component: FruitsComponent},
  {path: 'dryfruits', component: DryFruitsComponent},
  {path: 'combo', component: ComboComponent}
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
