import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  public static CartNumber: number = 0;
  constructor(private CartServ: ProductsService) {}
  ngOnInit(): void {}

  get CartCount(){
    return NavigationBarComponent.CartNumber;
  }
}
