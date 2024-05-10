import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'app/shared/shared.module';
import { DataViewModule } from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import { ProductsAdminComponent } from './products-admin/products-admin.component';



@NgModule({
  declarations: [ProductComponent,ProductsAdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataViewModule,
    TableModule        
  ],
  //exports:[ProductComponent]
})
export class ProductModule { }