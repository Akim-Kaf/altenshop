import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Product, ProductDto } from './product.model';
import { PRODUCTS_ITEMS } from './PRODUCTS_ITEMS';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productItems: Product[]=PRODUCTS_ITEMS;
  constructor(private httpClient:HttpClient) { 
  }

  public getProducts():Observable<Product[]>{
    return this.httpClient
      .get<ProductDto>('./assets/products.json').pipe(map(e=>e.data));

  }
  
  public getProductItems():Observable<Product []>{
    return of(this.productItems);
  }

  public sortProductItems(){
      return of(this.productItems.sort((a,b)=>{return a.price-b.price}));
  }

}
