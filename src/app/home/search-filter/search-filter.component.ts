import { Component, OnInit, SimpleChange, SimpleChanges, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  // @Input() dogs: any;
  // @Output() passFilteredDogs = new EventEmitter<string>();
  
  public gender: string = "";
  public age: string = "";
  public coat: string = "";

  location: any = {
    city: "",
    state: "",
    postalCode: ""
  }

  public color: string = "primary";

  value: number = 80;
  min: number = 30;
  max: number = 130;

  public distance: number = 100;
  public minDis: number = 5;
  public maxDis: number = 500;

  disLabel(val: number){
    return val
  }

  public children = false;
  public cats = false;
  public dogs = false;
  public houseTrained = false;

  

  constructor(fb: FormBuilder) {

   }

  ngOnInit(): void {
  }

  filterDogs(){
    console.log("filtering")
    let request = "https://api.petfinder.com/v2/animals?type=dog&size=" + this.findSizeVal() +
    "&good_with_children" + this.children +
    "&good_with_cats" + this.cats +
    "&good_with_dogs" + this.dogs +
    "&house_trained" + this.houseTrained;
    if(this.gender){
      request += "&gender=" + this.gender
    }
    if(this.age){
      request += "&age=" + this.age
    }
    if(this.coat){
      request += "&coat=" + this.coat
    }
    if(this.location.postalCode.length === 5){
      request += "&location=" + this.location.postalCode
      + "&distance=" + this.distance
    }else if(this.location.city && this.location.state){
      request += "&location=" + this.location.city.trim().toLowerCase() + "," + this.location.state.trim().toLowerCase()
      + "&distance=" + this.distance
    }
  
    console.log(request)
    // this.passFilteredDogs.emit(request);

  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log(this.postalCode)
  // }

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
