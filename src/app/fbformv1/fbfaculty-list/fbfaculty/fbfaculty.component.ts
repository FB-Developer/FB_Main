import { Component,Input, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Form,FormControl,FormArray,Validators}from '@angular/forms'
import {FBfaculty} from '../../fbmodel/fbfacultydt';

@Component({
  selector: 'fbfaculty',
  templateUrl: './fbfaculty.component.html',
  styleUrls: ['./fbfaculty.component.css']
})
export class FbfacultyComponent implements OnInit {
  @Input('facultyComponentArray') public facultyComponentArray:FormArray;
  @Input('faculty') public faculty:FBfaculty;

  public facultyFG:FormGroup;
  rangeError:string;
  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.facultyFG=this.fb.group({
        fname:[this.faculty.fname],
        fdept:[this.faculty.fdept],
        rating:['Excellent',Validators.required],
        score:['88',Validators.required]
    });
    this.facultyComponentArray.push(this.facultyFG);
  }
  onChange(event:any){
    let temp:number=this.facultyFG.controls['score'].value;
    let ratingValue:string=this.facultyFG.controls['rating'].value;
    if(ratingValue.startsWith('Excellent')&&(temp<81||temp>100))
      this.rangeError='Range Invalid, Expecting(81-100)';
    else if(ratingValue.startsWith('Very Good')&&(temp<61||temp>80))
        this.rangeError='Range Invalid, Expecting(61-80)';
    else if(ratingValue.startsWith('Good')&&(temp<41||temp>60))
            this.rangeError='Range Invalid, Expecting(41-60)';
    else if(ratingValue.startsWith('Fair')&&(temp>40||temp<0))
                this.rangeError='Range Invalid, Expecting(0-40)';
    else
      this.rangeError=null;
  }
  onChangeScore(event:any)
  {
    let ratingValue:string=this.facultyFG.controls['rating'].value;
    if(!ratingValue)
        this.rangeError='Select Option';
    else
    if(ratingValue.startsWith('Excellent')&&(event<81||event>100))
      this.rangeError='Range Invalid, Expecting(81-100)';
    else if(ratingValue.startsWith('Very Good')&&(event<61||event>80))
        this.rangeError='Range Invalid, Expecting(61-80)';
    else if(ratingValue.startsWith('Good')&&(event<41||event>60))
            this.rangeError='Range Invalid, Expecting(41-60)';
    else if(ratingValue.startsWith('Fair')&&(event>40||event<0))
                this.rangeError='Range Invalid, Expecting(0-40)';
    else
      this.rangeError=null;
  }
  restricRangeValue(event:any)
  {
    let inputChar = String.fromCharCode(event.charCode);
    if(inputChar=='e')
      event.preventDefault();
  }
}
