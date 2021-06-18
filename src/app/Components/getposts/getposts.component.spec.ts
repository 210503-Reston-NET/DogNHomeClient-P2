import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DNHService } from '../../dnh.service'
import { GetpostsComponent } from './getposts.component';
import { PetFinderService } from '../../pet-finder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
describe('GetpostsComponent', () => {
  let component: GetpostsComponent;
  let fixture: ComponentFixture<GetpostsComponent>;
=======

describe('GetpostsComponent', () => {
  let component: GetpostsComponent;
  let fixture: ComponentFixture<GetpostsComponent>;
  //private route: ActivatedRoute,
    //private service: DNHService,
    //private router: Router,
    //private petFinder: PetFinderService
>>>>>>> ff6ddf77de36e26d7a237f03463234cf102794cf

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpostsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers:[PetFinderService,DNHService, RouterModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
