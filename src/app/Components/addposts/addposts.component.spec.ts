import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostsComponent } from './addposts.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service';
import { Post } from '../../models/Post';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AuthService } from '../../auth.service';

describe('AddpostsComponent', () => {
  let component: AddpostsComponent;
  let fixture: ComponentFixture<AddpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpostsComponent],
      imports: [],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
