import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  cardData: any[] = [
    {
      name:'Card 1'
    },
    {
      name:'Card 2'
    },
    {
      name:'Card 3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
