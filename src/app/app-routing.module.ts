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
<<<<<<< HEAD
    path: "List", 
=======
    path: "List/:id", 
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
    component: DogListComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "Survey", 
    component: SurveyComponent,
    canActivate: [LoggedInGuard]
  },
  {path: "Login", component: LoginComponent},
  { path: "Forum", component: ForumComponent },
  { path: "addForum", component: AddForumComponent },
  { path: "Post", component: GetpostsComponent },
  { path: "addPost", component: AddpostsComponent},
  {
    path: "*", 
    component: HomeComponent,
    canActivate: [LoggedInGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
