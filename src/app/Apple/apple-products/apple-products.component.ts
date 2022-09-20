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

  company: String = '';
  title: String = '';
  price: String = '';
  image_path: String = '';
  rating: Number = 0;
  isnew: Boolean = false;
  type: String = '';
  color: String = '';
  isvisible: Boolean = false;
  constructor(private ProductsServ: ProductsService) {}

  ngOnInit(): void {
    this.ProductsServ.GetAppleData().subscribe({
      next: (prods) => {
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
    this.ProductsServ.AddToCart(product);
    NavigationBarComponent.CartNumber++;
    alert("Adeed To Cart")
  }
}
