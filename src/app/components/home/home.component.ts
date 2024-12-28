import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post.type';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
