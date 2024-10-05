import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit{
  electronics: any []=[];


  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
      this.getAllProducts();
  }
  
  getAllProducts():any{
  
    this.http.get("https://fakestoreapi.com/products/category/electronics").subscribe((response:any)=>{
  
  
  this.electronics= response;
  
    });
  
  }
  
}
