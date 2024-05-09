import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';

const routes: Routes = [
  {
    path: 'products', component:ProductComponent
  },
  {
    path: 'products-admin', component:ProductsAdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
