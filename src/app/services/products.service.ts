import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { 
    
  }
  private apiUrl = 'http://localhost:3000/products';

  public getProducts () : Observable <Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
