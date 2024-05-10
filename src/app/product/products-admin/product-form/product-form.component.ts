import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/product/product/product.model';
import { ProductsAdminService } from '../products-admin.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product:Product;

  isAddForm:boolean;
  categorys:string[]=["Accessories","Fitness","Clothing","Electronics"];
  products:Product []=[];

  constructor(private route: ActivatedRoute, private router: Router, 
    private readonly productAdminService: ProductsAdminService ) { }
  

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
    const prodId=this.route.snapshot.paramMap.get('id');
    this.productAdminService.getProducts().subscribe((itemes)=>{
      this.products=itemes
      console.table("Curente count products : "+this.products.length);
      console.table("Snap id : "+prodId);
      this.product=this.products.find((e)=>e.id==+prodId);    
      console.table("Product get: "+this.product);
    });
    
  }

  hasCategory(category: string): boolean {
    return this.product.category.includes(category);
  }

  selectCategory($event: Event, category: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      if(this.product.category!=category)this.product.category=category;
    } 
  }

  isCategorysValid(category: string): boolean {
    if(this.product.category.length == 1 && this.hasCategory(category)) {
      return false;
    }

    if(this.product.category.length > 2 && !this.hasCategory(category)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if(this.isAddForm) {
      this.productAdminService.postProduct(this.product)
        .subscribe((product: Product) => this.router.navigate(['/product', product.id]));
    } else {
      this.productAdminService.updateProduct(this.product)
        .subscribe(() => this.router.navigate(['/product', this.product.id]));
    }
  }

}
