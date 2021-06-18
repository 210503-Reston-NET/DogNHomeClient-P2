import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddcommentsComponent } from './addcomments.component';
import { AuthService } from '../../auth.service';
import { DNHService } from '../../dnh.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment.prod';


describe('AddcommentsComponent', () => {
  let component: AddcommentsComponent;
  let fixture: ComponentFixture<AddcommentsComponent>;
  let service: DNHService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcommentsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [DNHService, RouterModule, AuthService, AngularFireModule.initializeApp(environment.firebase)  ]
    })
      .compileComponents();
    service = TestBed.inject(DNHService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
