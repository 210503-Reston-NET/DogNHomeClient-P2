import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DNHService } from '../../dnh.service'
import { GetpostsComponent } from './getposts.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PetFinderService } from '../../pet-finder.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from 'src/environments/environment';
// import { AngularFireAuth } from '@angular/fire/auth'
// import {AngularFireAuthTest} from '@angular/fire/auth'
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { Post } from '../../models/Post';
import { AddForumComponent } from '../add-forum/add-forum.component';
import { GetcommentsComponent } from '../getcomments/getcomments.component';


describe('GetpostsComponent', () => {
  let component: GetpostsComponent;
  let fixture: ComponentFixture<GetpostsComponent>;
  // let petFinder: PetFinderService;
  // let httpMock: HttpTestingController;
  let routeMock: ActivatedRoute;
  let router: Router;
  let service: DNHService;

  let mockPost: {
    postId: 1
  };
  let mockPosts: any = [1,2];

  class MockService {
    GetPosts(){}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GetpostsComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'addForum', component: AddForumComponent},
          {path: 'Post', component: GetpostsComponent},
          {path: 'addPost', component: AddForumComponent},
          {path: 'Comment', component: GetcommentsComponent}
        ]), 
        FormsModule, 
        MatCardModule
      ],
      providers:[
        // HttpClientTestingModule,
        PetFinderService,
        // Router,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              forumId: 1,
            }),
          }
        },
        {
          provide: DNHService, useClass: MockService
        }
      ]
    })
    .compileComponents();
    // TestBed.inject(PetFinderService)
    // routeMock = TestBed.inject(ActivatedRoute);
    // service = TestBed.inject(DNHService);
    // router = TestBed.inject(Router);
    // petFinder = TestBed.inject(PetFinderService);
    // httpMock = TestBed.inject(HttpTestingController)
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(Router)
    TestBed.inject(HttpClientTestingModule)
    // TestBed.inject(PetFinderService)
  });

  // it('should pull the route param', () => {
  //   routeMock.queryParams.subscribe(params => {
  //     expect(params.forumId).toEqual(1)
  //   })
  // })

  // it('should return a post', () => {
  //   service.GetPosts(1).then(res => {
  //     expect(res).toBeTruthy()
  //   })

  //   const req = httpMock.expectOne("https://dognhome.azurewebsites.net/api/Post/1")
  //   expect(req.request.method).toBe("GET")
  //   req.flush(mockPosts)
  // })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
