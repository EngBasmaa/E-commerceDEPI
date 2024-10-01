import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  displayedProducts: any[] = [];

  currentPage = 1;
  pageSize = 4;
  totalItems: any;

  p: number = 1;
  itemsPerPage: number = 4;
  totalProducts: any;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    // this.loadProducts();

  }

  retreiveData(): void {
    this.service.getAllProducts().subscribe((data: any) => {
      this.products = data;
      this.totalProducts = data.length;
    })
  }
  //..............

  getProducts(): void {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.totalItems = res.length;
        this.updateDisplayedProducts();
        this.loading = false;
      },
      error => {
        this.loading = false;
        alert('Failed to fetch products');
      }
    );
  }

  getCategories(): void {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res; // Store all categories
        this.loading = false;
      },
      error => {
        this.loading = false;
        alert('Failed to fetch categories');
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    if (value === 'all') {
      this.getProducts();
    } else {
      this.getProductsByCategory(value);
    }
  }

  getProductsByCategory(category: string): void {
    this.loading = true;
    this.service.getProductsByCategory(category).subscribe(
      (res: any) => {
        this.products = res;
        this.totalItems = res.length;
        this.updateDisplayedProducts();
        this.loading = false;
      },
      error => {
        this.loading = false;
        alert('Failed to fetch products by category');
      }
    );
  }


  // ....................................................................


  handlePageChange(pageNumber: number): void {
    // const pageNumber = (event.target as HTMLSelectElement).value;
    // this.onPageChange(Number(pageNumber));
    this.currentPage = pageNumber;
    this.p = pageNumber;  // Ensure `p` is updated correctly
    this.updateDisplayedProducts();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updateDisplayedProducts();
  }

  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }

  // .....................
  onCategoryChange(category: string): void {
    if (category === 'all') {
      this.getProducts(); // Fetch all products if "All" is selected
    } else {
      this.getProductsByCategory(category); // Fetch products based on selected category
    }
  }

}