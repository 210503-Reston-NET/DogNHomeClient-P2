import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Forum } from '../../models/Forum';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {

  newForum: Forum = {
    forumID: 1,
    topic: 'default',
    description: 'default'
  }


  constructor(
    private route: ActivatedRoute,
    private service: DNHService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //alert(this.newForum.topic + " " + this.newForum.description)
    this.service.AddForum(this.newForum).then(result =>
      this.router.navigate(['Forum'])
    ).catch(err => alert(err));
   
  }

}
