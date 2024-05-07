import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PRODUCTS_ITEMS } from './PRODUCTS_ITEMS';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productItems: Product[]=PRODUCTS_ITEMS;
  products:Product[];
  public layout: 'grid' | 'list'='grid';
  public sortKey: string []=['pricek','namek','kcategory'];
  public sortOptions: string []=['price','name','category'];
  public searchValue:string;
  
  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
     
    this.productService.getProducts().subscribe(items=>{
      //console.log("prods of prod com: "+JSON.stringify(items));
      this.products=items;
    });
    
  }

  onSortChange(event:Event){

  }

  

}
