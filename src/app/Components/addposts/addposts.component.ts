import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Post } from '../../models/Post';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {

  forumID: number = 0;
  authProvider: any = AuthProvider;

  newPost: Post = {
    postID: 0,
    topic: 'Enter a post here',
    userCreator: 'user',
    forumID: 0,
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
          alert(result.displayName + " Calling from within Auth")
          this.newPost.userCreator = result.displayName
        }
        else if (result.email) {
          alert(result.email)
          this.newPost.userCreator = result.email
        }
    });

    this.route.queryParams.subscribe(
      params => {
        this.newPost.forumID = params.forumID;
        this.forumID = params.forumID;
      } )
  }
  onSubmit(): void {
  
    alert(this.newPost.userCreator + " Calling Second");

    this.service.AddPost(this.newPost);
    this.router.navigate(['Post'], { queryParams: {forumId: this.forumID}});
  }
}
