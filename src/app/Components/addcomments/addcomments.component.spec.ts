import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { DNHService } from '../../dnh.service';

import { AddcommentsComponent } from './addcomments.component';
import { of } from 'rxjs';

describe('AddcommentsComponent', () => {
  let component: AddcommentsComponent;
  let fixture: ComponentFixture<AddcommentsComponent>;
  
  class MockService {
    GetPost(){
      topic: "Nothing"
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommentsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: DNHService, useClass: MockService
        },
        AuthService,
        Router,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              postID: 1,
            }),
          }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
