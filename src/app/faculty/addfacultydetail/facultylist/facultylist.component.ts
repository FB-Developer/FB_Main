import { Component,Input, OnInit } from '@angular/core';
import{FBfaculty}from'../../../fbmodel/fbfacultydt';
import {FormGroup,FormBuilder,Form,FormArray,Validators} from '@angular/forms';

@Component({
  selector: 'fb-facultylist',
  templateUrl: './facultylist.component.html',
  styleUrls: ['./facultylist.component.css']
})
export class FacultylistComponent implements OnInit {
  @Input('subjectFG')
  subjectFG:FormGroup;
  @Input('facultyList')
  facultyList:FBfaculty[];

  constructor(private fb:FormBuilder) { }
  ngOnInit() {
      this.subjectFG.addControl('facultyList',this.fb.array([]));
  }
  addFaculty(){
    let faculty =new FBfaculty();
    faculty.fname="";
    faculty.fdept="";
    this.facultyList.push(faculty);
  }
  removeFaculty(indx){
    if(this.facultyList.length>1)
      {
        this.facultyList.splice(indx,1);
        (<FormArray>this.subjectFG.controls['facultyList']).removeAt(indx);
      }
  }
}
