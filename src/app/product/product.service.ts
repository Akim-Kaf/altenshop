import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductDto } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private showProducts: boolean;
  constructor(private httpClient:HttpClient) { 
    this.showProducts=false;
  }

  public getProducts():Observable<Product[]>{
    return this.httpClient
      .get<ProductDto>('./assets/products.json').pipe(map(e=>e.data));

  }

  public setShowProducts(value:boolean):void{
    this.showProducts=value;
  }

  public getShowProducts():boolean{
    return this.showProducts;
  }

}
