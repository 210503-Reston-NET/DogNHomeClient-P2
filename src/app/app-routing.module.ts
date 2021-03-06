import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggedInGuard} from 'ngx-auth-firebaseui';

import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { ForumComponent } from './Components/forum/forum.component';
import { AddForumComponent } from './Components/add-forum/add-forum.component';
import { GetpostsComponent } from './Components/getposts/getposts.component';
import { AddpostsComponent } from './Components/addposts/addposts.component';
import { GetcommentsComponent } from './Components/getcomments/getcomments.component';
import { AddcommentsComponent } from './Components/addcomments/addcomments.component';
import { UserDoListsComponent } from './user-do-lists/user-do-lists.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: "User", 
    component: UserPageComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "DogDetails/:id", 
    component: DogDetailsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "List", 
    component: DogListComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "Survey", 
    component: SurveyComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "UserLists",
    component: UserDoListsComponent,
    canActivate: [LoggedInGuard]
  },
  {path: "Login", component: LoginComponent},
  { path: "Forum", component: ForumComponent },
  { path: "addForum", component: AddForumComponent },
  { path: "Post", component: GetpostsComponent },
  { path: "addPost", component: AddpostsComponent },
  { path: "Comment", component: GetcommentsComponent },
  { path: "addComment", component: AddcommentsComponent },
  {
    path: "**", 
    component: HomeComponent,
    canActivate: [LoggedInGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
