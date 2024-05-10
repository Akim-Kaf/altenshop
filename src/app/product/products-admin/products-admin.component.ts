import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product/product.model';
import { ProductsAdminService } from './products-admin.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  
  public productItems: Product[];
  selectedProducts: Product[];
  
  constructor(private readonly productAdminService:ProductsAdminService) { }

  ngOnInit(): void {
    this.productAdminService.getProducts().subscribe((itemes)=>this.productItems=itemes);
  }

  onRowEditInit(product:Product){

  }

  onRowEditSave(product:Product){

  }

  onRowEditCancel(product:Product,ri:number){

  }


}
