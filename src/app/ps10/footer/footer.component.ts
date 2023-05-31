import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  y1!:string;
  constructor() {
    this.y1 = "this is footer component";
   }

  ngOnInit(): void {
  }

}
