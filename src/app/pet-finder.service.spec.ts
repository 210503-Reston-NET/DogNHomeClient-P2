import { TestBed } from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";
import { PetFinderService } from './pet-finder.service';

describe('PetFinderService', () => {
  let service: PetFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
    });
    service = TestBed.inject(PetFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
