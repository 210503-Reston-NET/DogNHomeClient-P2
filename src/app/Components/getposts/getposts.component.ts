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

    // this.route.queryParams.subscribe(
    //   params => {
    //     this.service.GetPosts(params.forumId).then(
    //       result => {
    //         this.posts = result;
    //       }
    //     );
    //     this.forumID = params.forumId;
    //   }
    // )

    this.getToken()
    this.tempCodeHolder()

  }

  tempCodeHolder(){
    this.route.queryParams.subscribe(
      params => {
        this.service.GetPosts(params.forumId).then(
          result => {
            this.posts = result;
          }
        );
        this.forumID = params.forumId;
      }
    )
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

  AddForum(): void {
    this.router.navigate(['addForum']);
  }

  GoToPosts(forumID: number) {
    this.router.navigate(['Post'], { queryParams: { forumId: forumID } });
  }
  AddPost(): void {
    this.router.navigate(['addPost'], { queryParams: { forumID: this.forumID } });
  }

  GoToComments(postID: number, postTopic: string): void {
    this.router.navigate(['Comment'], { queryParams: { postID: postID, postTopic: postTopic } });
  }
}
