import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DNHService } from '../../dnh.service'
import { GetpostsComponent } from './getposts.component';
import { PetFinderService } from '../../pet-finder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

=======

import { GetpostsComponent } from './getposts.component';
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5

describe('GetpostsComponent', () => {
  let component: GetpostsComponent;
  let fixture: ComponentFixture<GetpostsComponent>;
<<<<<<< HEAD
  //private route: ActivatedRoute,
    //private service: DNHService,
    //private router: Router,
    //private petFinder: PetFinderService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpostsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers:[PetFinderService,DNHService, RouterModule]
=======

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpostsComponent ]
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
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
