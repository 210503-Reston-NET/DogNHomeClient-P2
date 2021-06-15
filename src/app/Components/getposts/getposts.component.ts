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
  forumID: number = 0;

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
        );
        alert(params.forumId)
        this.forumID = params.forumId;
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

  AddPost(): void {
    this.router.navigate(['addPost'], { queryParams: { forumID: this.forumID } });
  }
}
