import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  first : string;
  last : string;
  ans : any;
  red :string='red'
  constructor() { 
    this.first = "anand";
    this.last = "balamurugan"
  }
//   onimage():void{
//     console.log('onclick is working')
//     const input = document.getElementById('input') as HTMLInputElement;
//     var button = document.querySelector('.clk') as Element;
//     fetch(`https://handlers.education.launchcode.org/static/planets.json`)
//     .then((response)=>response.json())
//     .then((data)=>{
//         button.addEventListener('click',()=>{
//           console.log('submit is working');
//         const destination = document.getElementById('Destination') as HTMLElement;
//         destination.innerHTML=`<h1>Planet ${data[input.value].name}</h1>`;
//         const image = document.getElementById('image') as HTMLImageElement;
//         image.innerHTML = `<img src="${data[input.value].image}" style="width:400px ;height:400px">`
//         console.log(data);
//         })
//     });
// }
  onpressed(event : any){
    console.log(event);
  }
  
  ngOnInit(): void {
  }
  eventvalue(event:any){
     console.log(event)
  }
  mystyle = {
    'background-color' :'lime',
    'font-size':'70px',
    'font-weigth':'bold',
    'border' : '2px solid green'
  }
}
