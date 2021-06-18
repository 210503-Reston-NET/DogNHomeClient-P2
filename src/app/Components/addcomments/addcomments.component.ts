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
  currentPost: Post =
    {
      postID: 0,
      forumID: 0,
      topic: "default",
      userCreator: 'user'
    }

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
          alert(result.email)
          this.newComment.userName = result.email
        }
    });

    this.route.queryParams.subscribe(
      params => {
        this.newComment.postID = params.postID;

        this.service.GetPost(params.postID).then(result =>
          this.currentPost.topic = result.topic
        );

      });

  }

  onSubmit(): void {
    alert(this.currentPost.topic)
    this.service.AddComments(this.newComment).then( result =>
      this.router.navigate(['Comment'])
      );
  }

}
