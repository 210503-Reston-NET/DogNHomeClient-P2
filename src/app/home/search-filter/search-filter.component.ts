import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  
  public gender: string = "";

  public color: string = "primary";

  value: number = 80;
  min: number = 30;
  max: number = 130;
  

  constructor(fb: FormBuilder) {

   }

  ngOnInit(): void {
  }

  findSizeVal(){
    if(this.value > 110){
      return "xlarge"
    }else if(this.value > 85){
      return "large"
    }else if(this.value > 65){
      return "medium"
    }else{
      return "small"
    }
  }

}
