import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from 'src/app/navigation-bar/navigation-bar.component';
import { ProductsService } from 'src/app/products.service';
import { Samsung } from './Samsung';

@Component({
  selector: 'app-samsung-product',
  templateUrl: './samsung-product.component.html',
  styleUrls: ['./samsung-product.component.css'],
})
export class SamsungProductComponent implements OnInit {
  private SearchValue: string = '';
  Products: Samsung[] = [];
  SamsungProducts: Samsung[] = [];
  SamsungIcon =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/64px-Samsung_Logo.svg.png';

  constructor(private SamsungServ: ProductsService) {}

  ngOnInit(): void {
    this.SamsungServ.GetSamsungData().subscribe({
      next: (prod) => {
        this.Products = prod;
        this.SamsungProducts = this.Products;
      },
    });
  }

  get SearchForProducts() {
    return this.SearchValue;
  }

  set SearchForProducts(value: string) {
    this.SearchValue = value;
    this.SamsungProducts = this.GetSearchedProducts(value);
  }

  GetSearchedProducts(val: string): any[] {
    return this.Products.filter((prod) =>
      prod.title.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
  }
  AddCart(product: any): void {
    this.SamsungServ.AddToCart(product);
    NavigationBarComponent.CartNumber++;
    alert("Adeed To Cart")
  }

}
