<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DNHService } from '../../dnh.service';
import { PetFinderService } from '../../pet-finder.service';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
import { ForumComponent } from './forum.component';

describe('ForumComponent', () => {
  let component: ForumComponent;
  let fixture: ComponentFixture<ForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ ForumComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    providers: [DNHService,RouterModule, PetFinderService ]
    })
    .compileComponents();
     
=======
      declarations: [ ForumComponent ]
    })
    .compileComponents();
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
