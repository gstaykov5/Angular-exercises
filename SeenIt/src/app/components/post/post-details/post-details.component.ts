import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';
import { CommentService } from 'src/app/core/services/comment.service';
import CommentInfo from '../../shared/models/Comment-Info';
import PostInfo from '../../shared/models/Post-Info';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  comments: CommentInfo[];
  post: PostInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.post = this.route.snapshot.data['post']
    // this.postService.getDetails(id)
    //   .subscribe((data) => {
    //     this.post = data;
        
    //     this.commentService.getAllForPost(this.post['_id'])
    //       .subscribe((data) => {
    //         this.comments = data;
    //       });
    //   });
  }

  loadComments() {
    this.commentService.getAllForPost(this.post['_id'])
      .subscribe((data) => {
        this.comments = data;
      });
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.loadComments();
      })
  }

  postComment(body) {
    this.commentService
      .postComment(body)
      .subscribe(() => {
        this.loadComments();
      })
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }
}
