import { Component, OnInit } from '@angular/core';
import { PRODUCTS_ITEMS } from 'app/product/PRODUCTS_ITEMS';
import { Product } from 'app/product/product.model';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  public productItems: Product[]=PRODUCTS_ITEMS;
  selectedProducts: Product[];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRowEditInit(product:Product){

  }

  onRowEditSave(product:Product){

  }

  onRowEditCancel(product:Product,ri:number){

  }


}
