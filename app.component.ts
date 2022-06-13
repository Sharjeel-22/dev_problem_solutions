import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  public item= '';
  items=[
    {id:1,name:"Mobile",price : 20000},
    {id:2,name:"Laptop lenovo",price : 20000},
    {id:3,name:"Laptop dell",price : 20000},
    {id:4,name:"car",price : 20000},
    {id:5,name:"Cars",price : 20000},
    {id:6,name:"mobile 1",price : 20000},
    {id:7,name:"fan",price : 20000},
    {id:8,name:"Fans",price : 20000},
    {id:9,name:"Mobile",price : 20000},
  ];
}
