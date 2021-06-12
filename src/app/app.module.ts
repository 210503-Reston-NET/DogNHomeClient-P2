
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFilterComponent } from './home/search-filter/search-filter.component';
import { HomeMainComponent } from './home/home-main/home-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPageComponent,
    DogDetailsComponent,
    DogListComponent,
    SurveyComponent,
    LoginComponent,
    NavbarComponent,
    SearchFilterComponent,
    HomeMainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase,
      () => 'DogNHome',
      {
      authGuardFallbackURL: 'Login',
      authGuardLoggedInURL: 'User'
    }),
    NgbModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
