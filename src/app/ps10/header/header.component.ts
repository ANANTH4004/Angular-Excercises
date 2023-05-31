import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  h1!:string;
  constructor() {
    this.h1="this is header component";
   }

  ngOnInit(): void {
  }

}
