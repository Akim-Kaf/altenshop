import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { SelectItem } from 'primeng/api';
import { ProductsAdminService } from 'app/product/products-admin/products-admin.service';

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
  public sortOptions: SelectItem[];
  public searchValue:string= "";
  sortOrder: number;
  sortField: string;  

  constructor(private readonly productAdminService: ProductsAdminService ) { }

  ngOnInit(): void {
    this.productAdminService.getProducts().subscribe(items=>{      
      this.products=items;
    });

    /*
    this.productAdminService.getProductItems().subscribe(items=>{
      this.productItems=items;
    });
    */  

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];  
  }

  onSortChange(event){
    
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
    //this.productAdminService.sortProductItems().subscribe(itemes=>this.productItems=itemes);               
  }

  onSearchKeyupEnter(){        
    if(this.searchValue.trim().length!=0){
      this.productAdminService.searchProductItems(this.searchValue).subscribe(itemes=>{
        this.productItems=itemes;
      }); 
    }         
  }

  onSearchChange(){    
    /*
    if(this.searchValue.length==0){
      this.productAdminService.getProducts().subscribe(items=>this.productItems=items);      
    }
    */
  }

  

}
