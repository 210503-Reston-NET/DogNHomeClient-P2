import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {

  forumID: number = 0;

  newPost: Post = {
    postID: 0,
    topic: 'Enter a post here',
    userName: 'user',
    forumID: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private service: DNHService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.newPost.forumID = params.forumID;
        this.forumID = this.forumID;
      } )
  }
  onSubmit(): void {
    this.service.AddPost(this.newPost);
    alert(this.newPost.forumID)
    this.router.navigate(['Post'], { queryParams: {forumId: this.forumID}});
  }
}
