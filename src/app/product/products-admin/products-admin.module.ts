import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsAdminComponent } from './products-admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule, } from '@angular/forms';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [ProductsAdminComponent, ProductFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,  
    TableModule        
  ],
  //exports:[ProductComponent]
})
export class ProductModule { }