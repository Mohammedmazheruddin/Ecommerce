import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

products:any []=[];


constructor(private http:HttpClient) { }


ngOnInit(): void {
    this.getAllProducts();
}

getAllProducts():any{

  this.http.get("https://fakestoreapi.com/products").subscribe((response:any)=>{


this.products=response;

  });

}
















addcartitem(id:number){


alert("product added to cart and the product id is:"+id)

}
 
  
  
   

  
  
  



}
