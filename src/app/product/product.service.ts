import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Product, ProductDto } from './product.model';
import { PRODUCTS_ITEMS } from './PRODUCTS_ITEMS';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productItems: Product[]=PRODUCTS_ITEMS;
  constructor(private httpClient:HttpClient) { 
  }

  public getProducts():Observable<Product[]>{
    return this.httpClient
      .get<ProductDto>('./assets/products.json').pipe(map(e=>e.data));
  }
  
  public getProductItems():Observable<Product []>{
    this.productItems=PRODUCTS_ITEMS;        
    return of(this.productItems);
  }

  public sortProductItems():Observable<Product []>{      
    this.productItems=this.productItems.sort((a,b)=>{return a.price-b.price});
      return of(this.productItems);
  }

  public searchProductItems(value:string):Observable<Product []>{           
    this.productItems=this.productItems.filter((item)=>item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    return of(this.productItems);
  }

}
