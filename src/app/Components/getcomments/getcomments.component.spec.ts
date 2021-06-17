import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcommentsComponent } from './getcomments.component';

describe('GetcommentsComponent', () => {
  let component: GetcommentsComponent;
  let fixture: ComponentFixture<GetcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
