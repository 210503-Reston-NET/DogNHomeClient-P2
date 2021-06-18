import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DNHService } from '../../dnh.service'
import { GetpostsComponent } from './getposts.component';
import { PetFinderService } from '../../pet-finder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('GetpostsComponent', () => {
  let component: GetpostsComponent;
  let fixture: ComponentFixture<GetpostsComponent>;

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
