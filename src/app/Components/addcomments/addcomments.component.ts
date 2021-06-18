import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Post } from '../../models/Post';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AuthService } from '../../auth.service';
import { Comments } from '../../models/Comments';

@Component({
  selector: 'app-addcomments',
  templateUrl: './addcomments.component.html',
  styleUrls: ['./addcomments.component.css']
})
export class AddcommentsComponent implements OnInit {

  newComment: Comments =
  {
    commentID: 0,
    postID: 0,
    userName: "",
    created: new Date(),
    message: "",
    }
  currentPost: string = "Not Found";

  constructor(
    private route: ActivatedRoute,
    private service: DNHService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(result => {
      if (result)
        if (result.displayName) {
          this.newComment.userName = result.displayName
        }
        else if (result.email) {
          this.newComment.userName = result.email
        }
    });

    this.route.queryParams.subscribe(
      params => {
        this.newComment.postID = params.postID;
        this.currentPost = params.postTopic;
        console.log(this.currentPost);
      });

  }

  onSubmit(): void {
    this.service.AddComments(this.newComment).then( result =>
      this.router.navigate(['Comment'], { queryParams: { postID: this.newComment.postID , postTopic: this.currentPost} })
      );
  }

}
