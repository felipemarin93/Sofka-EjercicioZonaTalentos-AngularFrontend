import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../interfaces/products';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((article)=>{
      console.log(article);

      this.products = article;
    })
  }

  articleAdded(){
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'El artículo se ha agregado al carrito de compras',
    showConfirmButton: false,
    timer: 2000
  })
}

}
