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
  
  constructor(private router:Router ,private readonly productAdminService:ProductsAdminService) { }

  ngOnInit(): void {
    this.productAdminService.getProducts().subscribe((itemes)=>this.productItems=itemes);
  }

  onRowEditInit(product:Product){
    this.router.navigate(['admin/edit/product/',product.id]);
    /*this.productAdminService.updateProduct(product)
        .subscribe(() => this.router.navigate(['/product', product.id]));
    */
  }

  onRowEditSave(){    
    this.router.navigate(['admin/add/product']);
  }

  onRowEditCancel(product:Product,ri:number){

  }


}
