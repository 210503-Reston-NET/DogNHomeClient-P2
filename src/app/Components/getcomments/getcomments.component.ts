import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Forum } from '../../models/Forum';
import { PetFinderService } from '../../pet-finder.service';
import { MatIconModule } from '@angular/material/icon'
import { Comments } from '../../models/Comments';

@Component({
  selector: 'app-getcomments',
  templateUrl: './getcomments.component.html',
  styleUrls: ['./getcomments.component.css']
})
export class GetcommentsComponent implements OnInit {

  dogs: any;
  comments: Comments[] = [];
  postID: number = 0;
  postTopic: string = "Not Found";

  constructor(
    private service: DNHService,
    private router: Router,
    private petFinder: PetFinderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.service.GetAllComments(params.postID).then(
          result => {
            this.comments = result
            console.log(this.comments)
          }
        ).catch(result => alert("Failed to getAllComments" + result));
        this.postID = params.postID;
        this.postTopic = params.postTopic;
      }
    )

    this.getToken();
  }

  getToken() {
    this.petFinder.GetToken().subscribe(token => {
      this.petFinder.SetToken(token)
      console.log("token set")
      this.getDogs()
    })
  }

  getDogs() {
    this.petFinder.GetDogs().subscribe(dogs => {
      console.log(dogs)
      this.dogs = dogs;

    });
  }

  AddComments() {
    this.router.navigate(['addComment'], { queryParams: { postID: this.postID, postTopic: this.postTopic} });
  }

}
