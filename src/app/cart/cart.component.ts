import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public CartItems: any = [];
  IsEmpty: Boolean = true;
  TotalCost: Number = 0;
  constructor(private CartServ: ProductsService) {
    this.CartItems = CartServ.CartItem;
    if (this.CartItems != 0) {
      this.IsEmpty = false;
    }
  }

  ngOnInit(): void {
    // console.log(this.TotalCost);
    // this.CartServ.GetDataFromCart().subscribe({
    //   next: (prod) => {
    //     console.log(prod);
    //     this.Products = prod;
    //     this.TotalCost += prod.price;
    //     console.log(prod.price);
    //     console.log(this.TotalCost);
    //   },
    // });
  }
}
