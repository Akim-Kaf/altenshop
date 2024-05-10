import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavService } from 'app/base/sidenav/sidenav.service';
import { Product } from './product/product/product.model';
import { ProductsAdminService } from './product/products-admin/products-admin.service';

const TRANSPARENT_NAV_PAGES = [ 'login' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @HostBinding('class.transparent') transparent = false;

  //products:Product[];
  constructor(
    private readonly router: Router,
    private readonly sidenavService: SidenavService,
    private readonly productsAdminService: ProductsAdminService ,
  ) {
   
  }

  get getExpanded(): boolean {
    return this.sidenavService.getExpanded();
  }
  get getPinned(): boolean {
    return this.sidenavService.getPinned();
  }  

  ngOnInit():void {
    /*
    this.productsAdminService.getProducts().subscribe(items=>{
      //console.log("prods:"+JSON.stringify(items));
    //  this.products=items;
    });*/
  }
}
