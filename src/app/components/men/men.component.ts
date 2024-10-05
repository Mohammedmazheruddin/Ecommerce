import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent implements OnInit {
  mens:any []=[];


  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
      this.getAllProducts();
  }
  
  getAllProducts():any{
  
    this.http.get("https://fakestoreapi.com/products/category/men's clothing").subscribe((response:any)=>{
  
  
  this.mens=response;
  
    });
  
  }
  
}
