import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import PostInfo from '../../shared/models/Post-Info';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  allPosts: PostInfo[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.url.subscribe((segmentArr: UrlSegment[]) => {
      if (segmentArr.length === 1) {
        this.postService.getAll()
          .subscribe((data) => {
            this.allPosts = data;
          });
      } else {
        this.postService.getUserPosts()
          .subscribe((data) => {
            this.allPosts = data;
          });
      }
    })
  }

  onDeletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.postService.getAll()
          .subscribe((data) => {
            this.allPosts = data;
          });
      })
  }

  
}
