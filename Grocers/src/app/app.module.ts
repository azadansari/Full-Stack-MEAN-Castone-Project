import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CartComponent } from './cart/cart.component';

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
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
