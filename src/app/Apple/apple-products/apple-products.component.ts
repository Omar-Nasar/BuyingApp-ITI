import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationBarComponent } from 'src/app/navigation-bar/navigation-bar.component';
import { ProductsService } from 'src/app/products.service';
import { Apple } from './Apple';

@Component({
  selector: 'app-apple-products',
  templateUrl: './apple-products.component.html',
  styleUrls: ['./apple-products.component.css'],
})
export class AppleProductsComponent implements OnInit {
  private SearchValue: string = '';
  Products: Apple[] = [];
  AppleProducts: Apple[] = [];
  constructor(private ProductsServ: ProductsService) {}

  ngOnInit(): void {
    this.ProductsServ.GetAppleData().subscribe({
      next: (prods) => {
        console.log(prods);

        this.Products = prods;
        this.AppleProducts = this.Products;
      },
    });
  }
  get SearchForProducts() {
    return this.SearchValue;
  }

  set SearchForProducts(value: string) {
    this.SearchValue = value;
    this.AppleProducts = this.GetSearchedProducts(value);
  }

  GetSearchedProducts(val: string): any[] {
    return this.Products.filter((prod) =>
      prod.title.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
  }
  AddCart(product: any): void {
    if (product.isvisible == true) {
      this.ProductsServ.AddToCart(product);
      NavigationBarComponent.CartNumber++;
      alert('Adeed To Cart');
    }
    else{
      alert('Soory This Product Not Available Right Now');
    }
  }
}
