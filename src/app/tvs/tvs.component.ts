import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {

  Tvs: any[] = [];
  constructor(private TvServ: ProductsService) {}

  ngOnInit(): void {
    this.TvServ.GetTvsData().subscribe({
      next: (prod) => {
        this.Tvs = prod;
      },
    });
  }
  AddCart(product: any): void {
    if (product.isvisible == true) {
      this.TvServ.AddToCart(product);
      NavigationBarComponent.CartNumber++;
      alert('Adeed To Cart');
    }
    else{
      alert('Soory This Product Not Available Right Now');
    }
  }
}
