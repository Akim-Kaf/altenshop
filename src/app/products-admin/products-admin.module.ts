import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin.component';
import { SharedModule } from 'app/shared/shared.module';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule    
  ]
})
export class ProductsAdminModule { }
