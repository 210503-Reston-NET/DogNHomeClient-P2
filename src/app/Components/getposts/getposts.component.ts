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
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private service: DNHService,
    private router: Router,
    private petFinder: PetFinderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      this.id = params.get('id')
    );

    this.service.GetPosts(this.id).then(results =>
      this.posts = results)
  }

}
