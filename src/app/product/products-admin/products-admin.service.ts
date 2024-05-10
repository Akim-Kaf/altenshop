import { Injectable } from '@angular/core';
import { Observable, map, of, tap, catchError } from 'rxjs';
import { Product, ProductDto } from '../product/product.model';
//import { PRODUCTS_ITEMS } from '../product/PRODUCTS_ITEMS';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsAdminService {
  
  private productItems: Product[];
  
  // url to connect to the a api
  //./assets/products.json
  //private apiUrl:string='../product/PRODUCTS_ITEMS.ts';
  private apiUrl:string='./assets/products.json';

  constructor(private httpClient:HttpClient) { 
  }

  public getProducts():Observable<Product[]>{
    return this.httpClient
      .get<ProductDto>(this.apiUrl).pipe(map(e=>e.data));
  }

  public getProductsById(productId:number):Observable<Product|any>{
    return this.httpClient.get<Product>(this.apiUrl+'/'+productId.toString()).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,undefined))
    )
  }

  public searchProductsByName(key:string): Observable<Product []>{
    if(key.length <=1)return of([]);

    return this.httpClient.get<Product[]>(this.apiUrl+'/?name='+key).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error, []))
    );
  }

  public updateProduct(product: Product): Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.put(this.apiUrl,product,httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,null))
    );
  }

  public postProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.httpClient.post<Product>(this.apiUrl, product, httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,null))
    )
  }

  deleteProduct(productId: number):Observable<Product>{
    return this.httpClient.delete(this.apiUrl+'/'+productId.toString()).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,null))
    );
  }
  
  /*
  public getProductItems():Observable<Product []>{
    this.productItems=PRODUCTS_ITEMS;        
    return of(this.productItems);
  }*/

  public sortProductItems():Observable<Product []>{      
    this.productItems=this.productItems.sort((a,b)=>{return a.price-b.price});
      return of(this.productItems);
  }

  public searchProductItems(value:string):Observable<Product []>{           
    this.productItems=this.productItems.filter((item)=>item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    return of(this.productItems);
  }

  private log(response:any){
    console.table(response);
  }

  private handleError(error:Error, erroValue:any){
    console.error(error);
    return of(erroValue);
  }
}
