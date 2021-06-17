import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Post } from '../../models/Post';
import { PetFinderService } from '../../pet-finder.service';

@Component({
  selector: 'app-getposts',
  templateUrl: './getposts.component.html',
  styleUrls: ['./getposts.component.css']
})
export class GetpostsComponent implements OnInit {

  posts: Post[] = [];
  dogs: any;
<<<<<<< HEAD
=======
  forumID: number = 0;
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5

  constructor(
    private route: ActivatedRoute,
    private service: DNHService,
    private router: Router,
    private petFinder: PetFinderService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.service.GetPosts(params.forumId).then(
          result => {
            this.posts = result;
          }
<<<<<<< HEAD
        )
=======
        );
        alert(params.forumId)
        this.forumID = params.forumId;
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
      }
    )

    this.getToken()

  }
  getToken() {
    this.petFinder.GetToken().subscribe(token => {
      this.petFinder.SetToken(token)
      this.getDogs()
    })
  }

  getDogs() {
    this.petFinder.GetDogs().subscribe(dogs => {
      console.log(dogs)
      this.dogs = dogs;
    });
  }

<<<<<<< HEAD
  AddForum(): void {
    this.router.navigate(['addForum']);
  }

  GoToPosts(forumID: number) {
    this.router.navigate(['Post'], { queryParams: { forumId: forumID } });
=======
  AddPost(): void {
    this.router.navigate(['addPost'], { queryParams: { forumID: this.forumID } });
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
  }
}
