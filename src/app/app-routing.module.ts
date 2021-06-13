import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {path: "", component: HomeComponent},
  {path: "User", component: UserPageComponent},
  {path: "DogDetails/:id", component: DogDetailsComponent},
  {path: "List/:id", component: DogListComponent},
  {path: "Survey", component: SurveyComponent},
  {path: "Login", component: LoginComponent},
  { path: "*", component: LoginComponent },
  { path: "Forum", component: ForumComponent },
  { path: "addForum", component: AddForumComponent },
  { path: "Post", component: GetpostsComponent },
  { path: "addPost", component: AddpostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
