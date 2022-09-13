import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductsRoutingModule } from './modules/products/products-routing.module';
import { loadInterceptor } from './modules/shared/interceptors/load-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './main-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS , useClass: loadInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
