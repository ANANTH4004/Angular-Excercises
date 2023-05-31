import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps1',
  templateUrl: './ps1.component.html',
  styleUrls: ['./ps1.component.css']
})
export class Ps1Component implements OnInit {

  first_name: string = '';
  last_name: string = '';
  date_of_joining !: Date;
  
  showDetails(first_name:string,last_name:string,doj:Date) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.date_of_joining = doj;
}

  constructor() { }

  ngOnInit(): void {
  }

}
