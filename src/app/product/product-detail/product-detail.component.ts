import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/product/product/product.model';
import { ProductsAdminService } from '../products-admin/products-admin.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailComponent implements OnInit {

  @Input() product:Product;

  constructor(private activeRoute:ActivatedRoute,private router:Router,private readonly productAdminService:ProductsAdminService) { }

  ngOnInit(): void {
    const prodId=this.activeRoute.snapshot.paramMap.get('id');
    this.productAdminService.getProductById(+prodId).subscribe((iteme)=>{      
      this.product=iteme;          
    });
  }

  goToProductAdminList() {
    this.router.navigate(['admin/products']);
  }

  goToEditProduct(product: Product) {
    this.router.navigate(['admin/edit/product', product.id]);
  }


}
