import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Forum } from '../../models/Forum';
import { PetFinderService } from '../../pet-finder.service';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-getcomments',
  templateUrl: './getcomments.component.html',
  styleUrls: ['./getcomments.component.css']
})
export class GetcommentsComponent implements OnInit {

  dogs: any;
  comments: any;
  postID: number = 0;

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
            this.comments = result;
          }
        );
        this.postID = params.forumId;
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

}
