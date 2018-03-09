import { Component,Input, OnInit } from '@angular/core';
import{FBfaculty}from'../../../fbmodel/fbfacultydt';
import{FBsubject}from'../../../fbmodel/fbsubjectdt';
import {FormGroup,FormBuilder,Form,FormArray,Validators} from '@angular/forms';

@Component({
  selector: 'fb-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {
  @Input('sectionFG')
  sectionFG:FormGroup;
  @Input('subjectList')
  subjectList:FBsubject[];

  constructor(private fb:FormBuilder) { }
  ngOnInit() {
      this.sectionFG.addControl('subjectList',this.fb.array([]));
  }
  addSubject(){
    let subject =new FBsubject();
    subject.subname="";
    subject.facultyList=new Array();
    let faculty =new FBfaculty();
    faculty.fname="";
    faculty.fdept="";
    subject.facultyList.push(faculty);
    this.subjectList.push(subject);
  }
  removeSubject(indx){
    if(this.subjectList.length>1)
      {
        this.subjectList.splice(indx,1);
        (<FormArray>this.sectionFG.controls['subjectList']).removeAt(indx);
      }
  }
}
