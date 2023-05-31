import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo',
  templateUrl: './ng-class-demo.component.html',
  styleUrls: ['./ng-class-demo.component.css']
})
export class NgClassDemoComponent implements OnInit {
  isRed: boolean = false;
  hasBorder: boolean = false;

  getClassObject() {
    return {
      'red': this.isRed,
      'bordered': this.hasBorder
    };
  }

  toggleRed() {
    this.isRed = !this.isRed;
  }

  toggleBorder() {
    this.hasBorder = !this.hasBorder;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
