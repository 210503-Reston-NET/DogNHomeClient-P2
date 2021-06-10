import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  public sizeParams: FormGroup;
  public genderParams: FormGroup;

  constructor(fb: FormBuilder) {
    this.sizeParams = fb.group({
      small: false,
      medium: false,
      large: false,
      xlarge: false,

    })
    this.genderParams = fb.group({
      male: true,
      female: true
    })
   }

  ngOnInit(): void {
  }

}
