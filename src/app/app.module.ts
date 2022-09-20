import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppleProductsComponent } from './Apple/apple-products/apple-products.component';
import { AppleHeaderComponent } from './Apple/apple-header/apple-header.component';
import { SamsungHeaderComponent } from './Samsung/samsung-header/samsung-header.component';
import { SamsungProductComponent } from './Samsung/samsung-product/samsung-product.component';
import { RatingComponent } from './rating/rating.component';
import { AboutusBodyComponent } from './About-us/aboutus-body/aboutus-body.component';
import { AboutusHeaderComponent } from './About-us/aboutus-header/aboutus-header.component';
import { HomeHeaderComponent } from './Home/home-header/home-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonProductsComponent } from './Home/common-products/common-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { WatchesComponent } from './watches/watches.component';
import { PhonesComponent } from './phones/phones.component';
import { TvsComponent } from './tvs/tvs.component';
import { NoProductsComponent } from './cart/no-products/no-products.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationBarComponent,
    AppleProductsComponent,
    AppleHeaderComponent,
    SamsungHeaderComponent,
    SamsungProductComponent,
    RatingComponent,
    AboutusBodyComponent,
    AboutusHeaderComponent,
    HomeHeaderComponent,
    PageNotFoundComponent,
    CommonProductsComponent,
    CartComponent,
    WatchesComponent,
    PhonesComponent,
    TvsComponent,
    NoProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
