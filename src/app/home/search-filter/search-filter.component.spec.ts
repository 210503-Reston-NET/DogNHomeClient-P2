<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormGroup} from '@angular/forms';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
import { SearchFilterComponent } from './search-filter.component';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ SearchFilterComponent ],
      imports: [ HttpClientTestingModule],
      providers:[FormBuilder,]
=======
      declarations: [ SearchFilterComponent ]
>>>>>>> 60304ac6561655e7817f0d1b236a62105f8ea8a5
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
