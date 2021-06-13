import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpostsComponent } from './getposts.component';

describe('GetpostsComponent', () => {
  let component: GetpostsComponent;
  let fixture: ComponentFixture<GetpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
