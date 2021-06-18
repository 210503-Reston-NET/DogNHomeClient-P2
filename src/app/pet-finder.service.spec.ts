import { TestBed } from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";
import { PetFinderService } from './pet-finder.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PetFinderService', () => {
  let service: PetFinderService;
  let httpMock: HttpTestingController;

  const dummyData = {
    access_token: "token string"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [PetFinderService]
    });
    service = TestBed.inject(PetFinderService);

    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get a token', () => {
    service.GetToken().subscribe(res => {
      expect(res).toBeTruthy();
    });

    const req = httpMock.expectOne("https://api.petfinder.com/v2/oauth2/token/");
    expect(req.request.method).toBe("POST");
    req.flush(dummyData);
  });

});
