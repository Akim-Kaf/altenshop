import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModule } from 'app/shared/shared.module';
import { DataViewModule } from 'primeng/dataview';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataViewModule    
  ],
  exports:[ProductComponent]
})
export class ProductModule { }