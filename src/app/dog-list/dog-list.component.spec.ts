import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetFinderService } from '../pet-finder.service'
import { DNHService } from '../dnh.service';
import {HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";
import { DogListComponent } from './dog-list.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogListComponent ],
      imports: [HttpClientTestingModule],
      providers:[DNHService,PetFinderService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
