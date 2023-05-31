import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { Root } from '../map';

@Component({
  selector: 'app-crypto-calci',
  templateUrl: './crypto-calci.component.html',
  styleUrls: ['./crypto-calci.component.css']
})
export class CryptoCalciComponent implements OnInit {
  data !:Root[];
  search !: string;

  constructor(private req : RequestService,private http:HttpClient) { }
  ngOnInit() {
    // this.req.getData("ethereum").subscribe(res =>{
    //   this.data = res;
    //  console.log(res);
    // }
    // );
    // this.getData('uniswap')
    // console.log(this.data);
  }
  getData1(){
    this.req.getData(this.search.toLocaleLowerCase()).subscribe(res =>{
      this.data = res;
     console.log(res);
    }
    );

  }

  

}



