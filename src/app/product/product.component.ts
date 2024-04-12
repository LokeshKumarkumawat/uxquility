import { CommonModule } from '@angular/common';
import { ProductService } from './../product.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Product } from './product.model';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationInstance } from 'ngx-pagination';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule ,HttpClientModule , RouterModule ,HeaderComponent ,NgxPaginationModule ,RouterOutlet , ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',

})


export class ProductComponent implements OnInit {

  products!: any[];
  currentPage!: number;
  totalPages!: number;


  constructor(private productService: ProductService ,private route: ActivatedRoute, private router: Router ) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("PAREMS",params);

      this.currentPage = parseInt(params['page'], 10) || 1;
      this.fetchProducts();
    });



  }

  fetchProducts(): void {
    this.productService.getProducts(this.currentPage).subscribe((data: any) => {
      this.products = data.results; // Assuming the response is an array of products
      // Calculate total pages based on response or any other logic
      this.totalPages = data.metadata.total_pages; // Assuming there are 10 pages
    });
  }



  onPageChange(page: number): void {
    this.currentPage = page;


    window.location.href = `${window.location.origin}/products?page=${this.currentPage}`;
  }

  navigateToProductDetail(productSlug: string): void {
    this.router.navigate(['/products', productSlug]);

    // window.location.href = `/products/${productSlug}`;
  }

}
