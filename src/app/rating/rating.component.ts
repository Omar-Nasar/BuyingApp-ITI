import { Input, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit, OnChanges {
  @Input()
  rating!: any;
  ClibWidth: any = 75;
  @Output()
  message:EventEmitter<string> = new EventEmitter<string>()

  constructor() {}
  ngOnChanges(): void {
    this.ClibWidth = (this.rating * 75) / 5;
  }
  OnClick(){
    this.message.emit(`This Film Has Rating ${this.rating}`)
  }
  ngOnInit(): void {}
}
