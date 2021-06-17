import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Forum } from '../../models/Forum';
import { PetFinderService } from '../../pet-finder.service';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forums: Forum[] = [];

  dogs: any;
  dog: any;
  name: string = 'default';
  breed: string = '';

  forum: any;
  constructor(
    private service: DNHService,
    private router: Router,
    private petFinder: PetFinderService
  ){ }


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

  ngOnInit(): void {
    this.service.GetForums().then(results => this.forums = results);

    this.getToken();
  }

  AddForum(): void {
    this.router.navigate(['addForum']);
  }

  GoToPosts(forumID: number) {
    this.router.navigate(['Post'], { queryParams: {forumId: forumID } });
  }

}
