import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps7',
  templateUrl: './ps7.component.html',
  styleUrls: ['./ps7.component.css']
})
export class Ps7Component implements OnInit {
  para : string;
  constructor() {
    this.para = "type something"
   }

  ngOnInit(): void {
  }

}
