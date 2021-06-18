import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';
import { SurveyComponent } from './survey.component';
import {RouterTestingModule} from '@angular/router/testing'

import { MatListModule } from '@angular/material/list';
import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service';
import {HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";

//private petFinder: PetFinderService, private dnhService: DNHService, private router: Router initial
describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

  class MockService
  {
    addDogList(){};
  }
  
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule ],
      declarations: [ SurveyComponent ],
      providers:[PetFinderService, DNHService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 
});
