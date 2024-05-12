import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';
import { ProductsAdminComponent } from './product/products-admin/products-admin.component';
import { ProductFormComponent } from './product/product-form/product-form.component';

const routes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
