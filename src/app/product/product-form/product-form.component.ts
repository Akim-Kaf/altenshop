import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/product/product/product.model';
import { ProductsAdminService } from '../products-admin/products-admin.service';

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

  constructor(private activeRoute: ActivatedRoute, private router: Router, 
    private readonly productAdminService: ProductsAdminService ) { }
  

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');    
    if(!this.isAddForm){
      const prodId=this.activeRoute.snapshot.paramMap.get('id');
      this.productAdminService.getProductById(+prodId).subscribe((iteme)=>{
        this.product=iteme});
    }else{
      console.log("Form for add product ...");
      this.product=new Product("","","descript product",1,0,"instock","Accesories","",1);
    }   
    
  }
  

  onSubmit() {
    if(this.isAddForm) {
      console.log("Post of  product ...");
      this.productAdminService.postProduct(this.product)
        .subscribe((product: Product) => this.router.navigate(['admin/detail/product', product.id]));
    } else {
      console.log("Update of  product ...");
      this.productAdminService.updateProduct(this.product)
        .subscribe((product:Product) => this.router.navigate(['admin/detail/product', product.id]));
    }
  }

}
