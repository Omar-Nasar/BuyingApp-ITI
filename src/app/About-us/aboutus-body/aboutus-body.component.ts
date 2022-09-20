import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus-body',
  templateUrl: './aboutus-body.component.html',
  styleUrls: ['./aboutus-body.component.css'],
})
export class AboutusBodyComponent implements OnInit {
  Members: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.Members = [
      {
        id: 1,
        name: 'Omar Sheref Bassiouni',
      },
      {
        id: 2,
        name: 'AbdulWahab Mohamed',
      },
      {
        id: 3,
        name: 'Mohamed Afifi',
      },
      {
        id: 4,
        name: 'Omar Sheref',
      },
    ];
  }
}
