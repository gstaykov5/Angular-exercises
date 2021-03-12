import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import CommentInfo from '../../shared/models/Comment-Info';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {
  
  @Input() commentInfo: CommentInfo;
  @Output() deleteCommentEmitter = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit() {  }

  deleteComment(id: string) {
    this.deleteCommentEmitter.emit(id);
  }

  isAuthor(commentInfo: Object) {
    
    
    return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }

}
