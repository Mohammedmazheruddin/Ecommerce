import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent implements OnInit {
  womens:any []=[];



  
  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
      this.getAllProducts();
  }
  
  getAllProducts():any{
  
    this.http.get("https://fakestoreapi.com/products/category/jewelery").subscribe((response:any)=>{
  
  
  this.womens=response;
  
    });
  
  }
  
}
