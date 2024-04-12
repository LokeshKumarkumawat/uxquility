import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ProductDetailService } from '../product-detail.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule ,HeaderComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.fetchProductDetails(slug);
    } else {
      // Handle the case where the slug is null
      console.log("Product slug is null");

    }
  }

  fetchProductDetails(productSlug: string): void {
    this.productService.getProduct(productSlug).subscribe(
      (product: any) => {
        if (product) {
          console.log("Product:", product);
          this.product = product;
        } else {
          console.error("Product not found:", productSlug);
          // Handle the case where the product is not found
        }
      },
      (error: any) => {
        console.error("Error fetching product:", error);
        // Handle the error
      }
    );
  }

}
