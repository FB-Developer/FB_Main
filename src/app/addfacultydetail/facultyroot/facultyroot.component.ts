import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Form,Validators} from '@angular/forms';
import {config} from './facultyconfig';
import{FBroot}from'../../fbmodel/fbrootdt';
@Component({
  selector: 'fb-facultyroot',
  templateUrl: './facultyroot.component.html',
  styleUrls: ['./facultyroot.component.css']
})
export class FacultyrootComponent implements OnInit {
  rootFG:FormGroup;
  rootDT:FBroot;
  academicyearList=config.academicyearList;
  degreeList=config.degreeList;
  departmentList=config.departmentList;
  semList=config.semList;
  classList= config.classList;
  constructor(private fb:FormBuilder) {
  }
  ngOnInit() {
    this.createRootDT();
    this.rootFG=this.fb.group({
      academicyear:[this.rootDT.academicyear,Validators.required],
      degree:[this.rootDT.degree,Validators.required],
      department:[this.rootDT.dept,Validators.required],
      sem:[this.rootDT.sem,Validators.required],
      class:[this.rootDT.class,Validators.required]
    });
  }
  createRootDT(){
      this.rootDT=new FBroot();
      this.rootDT.academicyear="2017-18";
      this.rootDT.degree="BE";
      this.rootDT.dept="CE";
      this.rootDT.sem="1";
      this.rootDT.class="1";
      this.rootDT.sectionList=new Array();
  }
}
