import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'app/shared/shared.module';
import { DataViewModule } from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import { FormsModule} from '@angular/forms';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductFormComponent } from './products-admin/product-form/product-form.component';



@NgModule({
  declarations: [ProductComponent,ProductsAdminComponent,ProductFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DataViewModule,        
    TableModule,            
  ],
  //exports:[ProductComponent]
})
export class ProductModule { }