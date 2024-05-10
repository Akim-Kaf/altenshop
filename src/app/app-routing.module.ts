import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';
import { ProductsAdminComponent } from './product/products-admin/products-admin.component';
import { ProductFormComponent } from './product/products-admin/product-form/product-form.component';

const routes: Routes = [
  {
    path: 'admin/edit/product/:id', component:ProductFormComponent
  },
  {
    path: 'products', component:ProductComponent
  },
  {
    path: 'admin/products', component:ProductsAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
