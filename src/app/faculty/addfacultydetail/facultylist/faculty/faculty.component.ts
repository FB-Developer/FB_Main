import { Component,Input, OnInit } from '@angular/core';
import{FBfaculty}from'../../../../fbmodel/fbfacultydt';
import {FormGroup,FormBuilder,Form,FormArray,Validators} from '@angular/forms';
import {config} from '../../../facultyconfig';

@Component({
  selector: 'fb-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyFG:FormGroup;
  @Input('facultyList')
  facultyList:FormArray;
  @Input('faculty')
  faculty:FBfaculty;
  departmentList=config.departmentList;
  constructor(private fb:FormBuilder){}
  ngOnInit() {
    this.facultyFG=this.fb.group({
      fname:[this.faculty.fname,Validators.required],
      fdept:[this.faculty.fdept,Validators.required]
    });
    this.facultyList.push(this.facultyFG);
  }

}
