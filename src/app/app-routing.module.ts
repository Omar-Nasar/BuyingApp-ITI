import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusHeaderComponent } from './About-us/aboutus-header/aboutus-header.component';
import { AppleHeaderComponent } from './Apple/apple-header/apple-header.component';
import { CartComponent } from './cart/cart.component';
import { HomeHeaderComponent } from './Home/home-header/home-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhonesComponent } from './phones/phones.component';
import { SamsungHeaderComponent } from './Samsung/samsung-header/samsung-header.component';
import { TvsComponent } from './tvs/tvs.component';
import { WatchesComponent } from './watches/watches.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'BuyingApp-ITI', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeHeaderComponent },
  { path: 'apple', component: AppleHeaderComponent },
  { path: 'samsung', component: SamsungHeaderComponent },
  { path: 'aboutus', component: AboutusHeaderComponent },
  { path: 'cart', component: CartComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'smartwatches', component: WatchesComponent },
  { path: 'tvs', component: TvsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
