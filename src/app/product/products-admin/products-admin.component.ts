import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product/product.model';
import { ProductsAdminService } from './products-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  
  public productItems: Product[];
  selectedProducts: Product[];
  isManySelect: boolean=false;
  
  constructor(private router:Router ,private readonly productAdminService:ProductsAdminService) { }

  ngOnInit(): void {
    this.productAdminService.getProducts().subscribe((itemes)=>this.productItems=itemes);
  }

  onRowEdit(product:Product){
    this.router.navigate(['admin/edit/product/',product.id]);    
  }

  onNew(){    
    this.router.navigate(['admin/add/product']);
    
  }
  
  onSelect(){  	
  	if(this.selectedProducts.length>1){
  		this.isManySelect=true;
  	}else{
  		this.isManySelect=false;
  	}
  }

  onRowDelete(product:Product){  	
    this.productAdminService.deleteProduct(product.id).subscribe((e)=>{      
      this.productItems=this.productItems.filter((e)=>e.id!=product.id);      
    });
  }
  
  onDeleteSelected(){  	
  	this.productAdminService.deleteProducts(this.selectedProducts).subscribe((e)=>{      
      this.productItems=this.productItems.filter((e)=>this.selectedProducts.indexOf(e)<0);
      this.selectedProducts=[];
      this.isManySelect=false;
    });
    
  }


}
