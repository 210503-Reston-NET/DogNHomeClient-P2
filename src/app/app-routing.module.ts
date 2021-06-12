import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggedInGuard} from 'ngx-auth-firebaseui';

import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';

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
    path: "List/:id", 
    component: DogListComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: "Survey", 
    component: SurveyComponent,
    canActivate: [LoggedInGuard]
  },
  {path: "Login", component: LoginComponent},
  {path: "*", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
