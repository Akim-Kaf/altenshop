import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidenavService } from 'app/base/sidenav/sidenav.service';
import { ProductService } from './product/product.service';
import { Product } from './product/product.model';

const TRANSPARENT_NAV_PAGES = [ 'login' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @HostBinding('class.transparent') transparent = false;

  products:Product[];
  constructor(
    private readonly router: Router,
    private readonly sidenavService: SidenavService,
    private readonly productService: ProductService,
  ) {
   
  }

  get getExpanded(): boolean {
    return this.sidenavService.getExpanded();
  }
  get getPinned(): boolean {
    return this.sidenavService.getPinned();
  }

  get getShowProducts():boolean{
    return this.productService.getShowProducts();
  }

  ngOnInit():void {
    this.productService.getProducts().subscribe(items=>{
      //console.log("prods:"+JSON.stringify(items));
      this.products=items;
    });
  }
}
