import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { LightgalleryModule } from 'lightgallery/angular';
import { SwiperModule } from 'swiper/angular';
import { ClientRoutingModule } from './client/client-routing.module'

import { HeaderComponent } from './client/components/header/header.component';
import { FooterComponent } from './client/components/footer/footer.component';
import { ButtonComponent } from './client/components/button/button.component';
import { CarouselComponent } from './client/components/carousel/carousel.component';
import { TabsComponent } from './client/components/tabs/tabs.component';
import { CartComponent } from './client/pages/cart/cart.component';
import { HomeComponent } from './client/pages/home/home.component';
import { ProductComponent } from './client/pages/product/product.component';
import { ProductDetailComponent } from './client/pages/product-detail/product-detail.component';
import { PromoComponent } from './client/pages/promo/promo.component';
import { ErrorPageComponent } from './client/pages/error-page/error-page.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';


import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';

import { CurrencyPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './client/pages/login/login.component';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbAlertModule, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './client/pages/blog/blog.component';
import { BlogDetailsComponent } from './client/pages/blog-details/blog-details.component';
import { CheckoutComponent } from './client/pages/Checkout/checkout/checkout.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RegisterComponent } from './client/pages/register/register.component';

import { SearchCartComponent } from './client/pages/search-cart/search-cart.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ContactComponent } from './client/pages/contact/contact.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { PriceFormatPipe } from './client/helper/price-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ButtonComponent,
    CarouselComponent,
    TabsComponent,
    CartComponent,
    HomeComponent,
    PriceFormatPipe,
    ProductComponent,
    ProductDetailComponent,
    PromoComponent,
    ErrorPageComponent,

    BlogDetailsComponent,
    CheckoutComponent,
    RegisterComponent,
    ContactComponent,
    SearchCartComponent,
    LiveChatComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule,
    LightgalleryModule,
    SwiperModule,
    MatBadgeModule,
    NgbCarouselModule,
    ClientRoutingModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    NgbModule


  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
  exports: [PriceFormatPipe]
})
export class AppModule { }
