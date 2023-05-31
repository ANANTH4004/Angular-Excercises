import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.component.html',
  styleUrls: ['./ps4.component.css']
})
export class Ps4Component implements OnInit {

  constructor() { }
  favMovies : any[] = [
    {
      name : 'Logan',
      year: 2017
    },
    {
      name : 'Neethaane En Ponvasantham',
      year : 2012
    },
    {
      name : 'Loki',
      year : 2021
    },
    {
      name : "Don't Breathe",
      year : 2016
    },
    {
      name : 'Aadukalam',
      year : 2011
    }

  ]
  ngOnInit(): void {
  }

}
