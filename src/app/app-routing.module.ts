import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';
import { ProductsAdminComponent } from './product/products-admin/products-admin.component';

const routes: Routes = [
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
