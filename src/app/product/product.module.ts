import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'app/shared/shared.module';
import { DataViewModule } from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import { FormsModule} from '@angular/forms';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const productRoutes:Routes=[  
  {path: 'admin/products', component: ProductsAdminComponent},
  {path: 'products', component: ProductComponent}, 
  {path: 'admin/edit/product/:id', component: ProductFormComponent},
  {path:'admin/detail/product/:id', component: ProductDetailComponent},
  {path:'admin/add/product', component: ProductFormComponent}   
];

@NgModule({
  declarations: [ProductComponent,ProductsAdminComponent,ProductFormComponent,ProductDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DataViewModule,        
    TableModule, 
    RouterModule.forChild(productRoutes)                 
  ],
  //exports:[ProductComponent]
})
export class ProductModule { }