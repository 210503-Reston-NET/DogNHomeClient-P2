import { OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service';
import {HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './home.component';
import { environment } from 'src/environments/environment';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule, AngularFireModule.initializeApp(environment.firebase)],
      providers:[DNHService,PetFinderService,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  
});
