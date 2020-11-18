import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogComponent } from './components/blog/blog.component';
import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';
import { CategoryComponent } from './components/admin-blog/category/category.component';
import { ProductsComponent } from './components/admin-blog/products/products.component';
import { BlogsComponent } from './components/admin-blog/blogs/blogs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  {
    path: 'admin', component: AdminBlogComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'category' },
      { path: 'category', component: CategoryComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'blogs', component: BlogsComponent },
  ] },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
