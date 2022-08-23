import { Component, OnInit } from '@angular/core';
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



}
