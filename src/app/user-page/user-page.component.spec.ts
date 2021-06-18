import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { Location } from '@angular/common'
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DNHService } from '../dnh.service';
import { PetFinderService } from '../pet-finder.service'


import { UserPageComponent } from './user-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule,
        NgxAuthFirebaseUIModule.forRoot(
          environment.firebase,
          () => 'DogNHome',
          {
          enableFirestoreSync: true,
          authGuardFallbackURL: '/Login',
          authGuardLoggedInURL: '/Home'
        }),
        AngularFireAuthModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
      ],
      declarations: [ UserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
