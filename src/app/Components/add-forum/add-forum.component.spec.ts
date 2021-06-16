import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DNHService } from '../../dnh.service';
import { AddForumComponent } from './add-forum.component';
import { FormsModule } from '@angular/forms';
import { Forum } from '../../models/Forum';

describe('AddForumComponent', () => {
  let component: AddForumComponent;
  let fixture: ComponentFixture<AddForumComponent>;
  let service: DNHService;
  let httpMock: HttpTestingController;
  
  const mockData: Forum ={
      forumID: 2,
      topic: 'default',
      description : 'default',

  }
  class MockService {
    AddForum(){};

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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should add forums to the list', () => {
      service.AddForum(mockData).then
      ((results) => {expect(service.GetForums() == null)});
  })
});
