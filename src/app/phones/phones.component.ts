import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})
export class PhonesComponent implements OnInit {
  Phones: any[] = [];
  constructor(private PhoneServ: ProductsService) {}

  ngOnInit(): void {
    this.PhoneServ.GetPhonesData().subscribe({
      next: (prod) => {
        this.Phones = prod;
      },
    });
  }
  AddCart(product: any): void {
    this.PhoneServ.AddToCart(product);
    NavigationBarComponent.CartNumber++;
    alert("Adeed To Cart")
  }
}
