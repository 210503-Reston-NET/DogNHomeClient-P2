import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoListsComponent } from './user-do-lists.component';

describe('UserDoListsComponent', () => {
  let component: UserDoListsComponent;
  let fixture: ComponentFixture<UserDoListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDoListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDoListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
