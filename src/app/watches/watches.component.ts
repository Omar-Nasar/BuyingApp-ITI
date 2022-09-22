import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css'],
})
export class WatchesComponent implements OnInit {
  Watches: any[] = [];
  constructor(private WatchServ: ProductsService) {}

  ngOnInit(): void {
    this.WatchServ.GetWatchesData().subscribe({
      next: (prod) => {
        console.log(prod);

        this.Watches = prod;
      },
    });
  }
  AddCart(product: any): void {
    if (product.isvisible == true) {
      this.WatchServ.AddToCart(product);
      NavigationBarComponent.CartNumber++;
      alert('Adeed To Cart');
    }
    else{
      alert('Soory This Product Not Available Right Now');
    }
  }
}
