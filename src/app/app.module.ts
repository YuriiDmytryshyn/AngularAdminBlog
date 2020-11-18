import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';
import { CategoryComponent } from './components/admin-blog/category/category.component';
import { ProductsComponent } from './components/admin-blog/products/products.component';
import { BlogsComponent } from './components/admin-blog/blogs/blogs.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AdminBlogComponent,
    CategoryComponent,
    ProductsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
