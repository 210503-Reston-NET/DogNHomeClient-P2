import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PetFinderService } from '../pet-finder.service';
import { Location,  } from '@angular/common'
import { DogDetailsComponent } from './dog-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DogDetailsComponent', () => {
  let component: DogDetailsComponent;
  let fixture: ComponentFixture<DogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogDetailsComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule,],
      providers: [PetFinderService,Location, RouterModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
