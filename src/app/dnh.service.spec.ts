import { TestBed } from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";
import { DNHService } from './dnh.service';

describe('DNHService', () => {
  let service: DNHService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DNHService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe("ForumServices", () =>
  //   {
  //     it('should get all forums', )
  //   })
});
