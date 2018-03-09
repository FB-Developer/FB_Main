import { Component,Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Form,Validators,FormArray} from '@angular/forms';

import {FBfaculty} from '../fbmodel/fbfacultydt';
@Component({
  selector: 'fbfaculty-list',
  templateUrl: './fbfaculty-list.component.html',
  styleUrls: ['./fbfaculty-list.component.css']
})
export class FbfacultyListComponent implements OnInit {
  @Input('subjectFG') public subjectFG:FormGroup;
  @Input('facultyList') public facultyList:FBfaculty[];

  constructor() { }
  ngOnInit() {
    this.subjectFG.addControl('facultyList',new FormArray([]));
  }}
