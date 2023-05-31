import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  g1!:string;
  constructor() { 
    this.g1="this is sidebar component";
  }

  ngOnInit(): void {
  }

}
