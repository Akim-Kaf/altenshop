import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productItems: Product[];
  products:Product[];
  public layout: 'grid' | 'list'='grid';
  public sortKey: string = "";
  public sortOptions: string []=['price'];
  public searchValue:string= "";

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(items=>{      
      this.products=items;
    });

    this.productService.getProductItems().subscribe(items=>{
      this.productItems=items;
    });    
  }

  onSortChange(){                
    this.productService.sortProductItems().subscribe(itemes=>this.productItems=itemes);               
  }

  onSearchKeyupEnter(){        
    if(this.searchValue.trim().length!=0){
      this.productService.searchProductItems(this.searchValue).subscribe(itemes=>{
        this.productItems=itemes;
      }); 
    }         
  }

  onSearchChange(){    
    
    if(this.searchValue.length==0){
      this.productService.getProductItems().subscribe(items=>this.productItems=items);      
    }
  }

  

}
