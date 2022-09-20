import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'body-parser';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public CartItem:any = [];

  constructor(private http: HttpClient) {}

  GetAppleData(): Observable<any> {
    return this.http.get(`http://localhost:6900/apple`);
  }
  GetSamsungData(): Observable<any> {
    return this.http.get(`http://localhost:6900/samsung`);
  }
  GetPhonesData(): Observable<any> {
    return this.http.get(`http://localhost:6900/phone`);
  }
  GetWatchesData(): Observable<any> {
    return this.http.get(`http://localhost:6900/watches`);
  }
  GetTvsData(): Observable<any> {
    return this.http.get(`http://localhost:6900/tv`);
  }
  GetDataFromCart(): Observable<any> {
    return this.http.get(`http://localhost:6900/cart`);
  }

  AddToCart(product: any) {
    var mergedCartItem = Object.assign({}, product, { 'quantity': 1, 'item': 1 });
    console.log(mergedCartItem);
    
    this.CartItem.push(mergedCartItem);
    console.log(this.CartItem);
    
  }

  // AddToCart(product: any) {
  //   console.log('title: ' + product.title);

  //   let AddedProduct: any = {
  //     company: 'Apple',
  //     title: product.title,
  //     price: product.price,
  //     image_path: product.image_path,
  //     rating: product.rating,
  //     isnew: product.isnew,
  //     type: product.type,
  //     color: product.color,
  //     isvisible: product.isvisible,
  //   };
  //   console.log(JSON.stringify(AddedProduct));
  //   return this.http.post('http://localhost:6900/insert', AddedProduct).subscribe();
  // }

  // addToCart(payload: { productTitle: String; }) {
  //   console.log('TEST Services');
  //   console.log(payload);
  //   return this.http.post(`http://localhost:6900/samsung`, payload).subscribe();
  // }
}
