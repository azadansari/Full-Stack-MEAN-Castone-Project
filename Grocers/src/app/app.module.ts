import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ProductCategorySliderComponent } from './product-category-slider/product-category-slider.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FruitsVegetablesComponent } from './fruits-vegetables/fruits-vegetables.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { VegitablesComponent } from './vegitables/vegitables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { DryFruitsComponent } from './dry-fruits/dry-fruits.component';
import { GreenVegitablesComponent } from './green-vegitables/green-vegitables.component';
import { ComboComponent } from './combo/combo.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WhyUsComponent,
    ProductCategorySliderComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    FooterComponent,
    PageNotFoundComponent,
    FruitsVegetablesComponent,
    ProductsComponent,
    CartComponent,
    VegitablesComponent,
    FruitsComponent,
    DryFruitsComponent,
    GreenVegitablesComponent,
    ComboComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
