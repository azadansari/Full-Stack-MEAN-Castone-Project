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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
