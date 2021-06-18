import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DNHService } from '../dnh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-do-lists',
  templateUrl: './user-do-lists.component.html',
  styleUrls: ['./user-do-lists.component.css']
})
export class UserDoListsComponent implements OnInit {

  public listsArr: any

  constructor(
    private auth: AuthService,
    private dnhService: DNHService,
    private router: Router
  ) { }

  getUserIdForListCheck(){
    this.auth.getUser().subscribe((user: any) =>{
      this.checkLists(user)
    })
  }

  checkLists(user: any){
    this.dnhService.GetAllDogListsForUser(user.uid).subscribe((res: any) => {
      console.log(res)
      this.listsArr = res
    })
  }

  viewList(listID: any){
    this.router.navigate(["List"], { queryParams: { listID: listID }})
  }

  ngOnInit(): void {
    this.getUserIdForListCheck()
  }

}
