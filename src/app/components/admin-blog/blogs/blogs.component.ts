import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog.interfaces';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogID: number;
  date = new Date;
  blogTitle: string;
  blogText: string;
  blogAuthor: string;
  blogImage: 'https://www.pizzaking.ua/resizer/resize/upload/catalog/b/b242e5f6c866013d6e0c07d9a5156639-472-472-c.jpg';
  editStatus = true;

  adminBlogs: Array<IBlog> = [];

  constructor(private blogsService: BlogService) { }

  ngOnInit(): void {
    this.getJSONAdminBlogs();
  }

  getJSONAdminBlogs(): void {
    this.blogsService.getJSONBlogs().subscribe(
      data => {
        this.adminBlogs = data;
      },
      err => {
        console.log(err);
      }
    )
  };

  addAdminBlog(): void {
    if (this.blogTitle.length === 0 || this.blogText.length === 0 || this.blogAuthor.length === 0) {
      this.blogTitle = '';
      this.blogText = '';
      this.blogAuthor = '';
    } else if (this.blogTitle.length !== 0 || this.blogText.length !== 0 || this.blogAuthor.length !== 0) {
      const newBlog = {
        id: 1,
        title: this.blogTitle,
        text: this.blogText,
        image: this.blogImage,
        date: this.date,
        author: this.blogAuthor
      }
      delete newBlog.id;
      this.blogsService.postJSONBlog(newBlog).subscribe(() => {
        this.getJSONAdminBlogs();
      });
      this.resetForm();
    }
  };

  deleteAdminBlog(blog: IBlog): void{
    this.blogsService.deleteJSONBlog(blog).subscribe(() => {
      this.getJSONAdminBlogs();
    })
  };

  editAdminBlog(blog: IBlog): void {
    this.blogID = blog.id;
    this.blogTitle = blog.title;
    this.blogText = blog.text;
    this.blogAuthor = blog.author;
    this.editStatus = false;
  };

  saveEditAdminBlog(): void {
    const updBlog = {
      id: this.blogID,
      title: this.blogTitle,
      text: this.blogText,
      image: this.blogImage,
      date: this.date,
      author: this.blogAuthor
    };
    this.blogsService.updateJSONBlog(updBlog).subscribe(() => {
      this.getJSONAdminBlogs();
    });
    this.resetForm();
    this.editStatus = true;

  };

  private resetForm(): void {
    this.blogTitle = '';
    this.blogText = '';
    this.blogAuthor = '';
  };


}
