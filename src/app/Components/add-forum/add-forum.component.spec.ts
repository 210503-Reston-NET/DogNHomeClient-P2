<<<<<<< HEAD
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DNHService } from '../../dnh.service';
import { AddForumComponent } from './add-forum.component';
import { FormsModule } from '@angular/forms';
import { Forum } from '../../models/Forum';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForumComponent } from './add-forum.component';
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5

describe('AddForumComponent', () => {
  let component: AddForumComponent;
  let fixture: ComponentFixture<AddForumComponent>;
<<<<<<< HEAD
  let service: DNHService;
  let httpMock: HttpTestingController;
  
  const mockData: Forum ={
      forumID: 2,
      topic: 'default',
      description : 'default',

  }
  class MockService {
    AddForum(){};
    GetForums(){};

  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForumComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
    providers: [{provide: DNHService,useClass: MockService}, RouterModule ]
  })
    .compileComponents();
    service = TestBed.inject(DNHService);
    httpMock = TestBed.inject(HttpTestingController);
=======

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForumComponent ]
    })
    .compileComponents();
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD

  it('Should add forums to the list', () => {
      return service.AddForum(mockData).then
      ((results) => {expect(service.GetForums() == null)});
  })
=======
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
});
