import { Component,Input, OnInit,ChangeDetectorRef } from '@angular/core';
import{FBsubject}from'../../../fbmodel/fbsubjectdt';
import{FBsection}from'../../../fbmodel/fbsectiondt';
import{FBfaculty}from'../../../fbmodel/fbfacultydt';
import {FormGroup,FormBuilder,Form,FormArray,Validators} from '@angular/forms';
@Component({
  selector: 'fb-sectionlist',
  templateUrl: './sectionlist.component.html',
  styleUrls: ['./sectionlist.component.css']
})

export class SectionlistComponent implements OnInit {
  @Input('rootFG')
  rootFG:FormGroup;

  @Input('sectionList')
  sectionList:FBsection[];
  constructor(private fb:FormBuilder,private cd:ChangeDetectorRef) { }
  ngOnInit() {
    this.rootFG.addControl('sectionList',this.fb.array([]));
    this.cd.detectChanges();
  }
  addSection(){
    let section=new FBsection();
    section.section="";
    section.subjectList=new Array();
    let subject=new FBsubject();
    subject.subname="";
    let faculty =new FBfaculty();
    faculty.fname="";
    faculty.fdept="";
    subject.facultyList=new Array();
    subject.facultyList.push(faculty);
    section.subjectList.push(subject);
    this.sectionList.push(section);
  }
  removeSection(indx){
    if(this.sectionList.length>1)
      {
        this.sectionList.splice(indx,1);
        (<FormArray>this.rootFG.controls['sectionList']).removeAt(indx);
      }
  }
}
