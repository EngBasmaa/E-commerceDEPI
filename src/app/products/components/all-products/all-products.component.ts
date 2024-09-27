import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

  products:any[] = [];
  categories:any[] = [];
  loading:boolean = false
  constructor(private service:ProductsService){}

  ngOnInit(): void{
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) =>{
      this.loading = true
      this.products = res
      this.loading = false
    }, error=>{
      this.loading = false
      alert(error)
    })
  }

  getCategories(){
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) =>{
      console.log(res)
      this.categories = res
      this.loading = false
    }, error=>{
      this.loading = false
      alert(error)
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    (value == "all" ) ? this.getProducts() : this.getProductsByCategory(value)
    }

  getProductsByCategory(keyword:string){
    this.loading = true
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.loading = false
      this.products = res
    })
  }
}
