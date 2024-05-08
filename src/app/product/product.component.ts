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
  public searchValue:string;
  public sortField:string="";
  public sortOrder:number;

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
    this.productService.sortProductItems();       
  }

  

}
