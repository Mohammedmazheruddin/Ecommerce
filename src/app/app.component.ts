import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cart:any []=[];



  
  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
    this.getAllcartProducts();

  }
  
  // get cart
  getAllcartProducts():any{
  
    this.http.get("https://fakestoreapi.com/carts").subscribe((response:any)=>{

      this.cart=response;
      

    });
    
  }
  
// deletecart
deletecartitem(id:number){
debugger
  this.http.get("https://fakestoreapi.com/carts/"+id).subscribe((response:any)=>{


    console.log(response);

  });
// alert("hey mazher")

}


// addtocart
addcartitem(){
  debugger
    this.http.get("https://fakestoreapi.com/carts'").subscribe((response:any)=>{
  
  
      console.log(response);
  
    });
  // alert("hey mazher")
  
  }
  


















}
