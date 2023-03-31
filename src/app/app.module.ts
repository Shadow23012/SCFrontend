import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {CardModule} from 'primeng/card';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {DialogModule} from 'primeng/dialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import {ToastModule} from 'primeng/toast';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password'
import {InputTextModule} from 'primeng/inputtext';
import { AuthModule } from '@auth0/auth0-angular';
import { SpeedDialModule } from 'primeng/speeddial';
import {TableModule} from 'primeng/table';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { ConfirmationService } from 'primeng/api';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';


@NgModule({
  imports: [
    BrowserModule,
    TableModule,
    SpeedDialModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule,
    ToastModule,
    PasswordModule,
    InputTextModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent },
      { path: 'login', component: LoginComponent},
      {path: 'admin', component:ProductAdminComponent},
      {path: 'usersadmin', component:UserAdminComponent}
    ]),

    AuthModule.forRoot({
      domain: 'dev-by4vfq3qqccxck3i.us.auth0.com',
      clientId: 'jKiGKC5oVlHfPGQZdnctNT81R69qzLMB',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductComponent,
    ProductAlertsComponent,
    CartComponent,
    ShippingComponent,
    LoginComponent,
    ProductAdminComponent,
    UserAdminComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/