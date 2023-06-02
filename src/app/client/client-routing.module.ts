import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CartComponent } from './pages/cart/cart.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';
import { PromoComponent } from './pages/promo/promo.component';
import { CheckoutComponent } from './pages/Checkout/checkout/checkout.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from '../auth.guard';
import { SearchCartComponent } from './pages/search-cart/search-cart.component';
import { ContactComponent } from './pages/contact/contact.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,


  }, {
    path: "san-pham",
    component: ProductComponent,

  },
  {
    path: 'san-pham/:slug', component: ProductDetailComponent
  },
  {
    path: 'dang-nhap', component: LoginComponent
  },
  {
    path: 'gio-hang', component: CartComponent
  },
  {
    path: 'tin-tuc', component: BlogComponent
  },
  {
    path: 'tin-tuc/:slug', component: BlogDetailsComponent
  },
  {
    path: 'thanh-toan', component: CheckoutComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'dang-ky', component: RegisterComponent
  },
  {
    path: 'tra-cuu', component: SearchCartComponent
  },
  {
    path: 'lien-he', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
