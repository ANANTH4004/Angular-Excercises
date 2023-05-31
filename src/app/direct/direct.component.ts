import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

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
