import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Post } from '../../models/Post';
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

=======
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
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
}
