import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [

  { path: '', component: ProductComponent },
  { path: 'products/:slug', component: ProductDetailComponent }

];
