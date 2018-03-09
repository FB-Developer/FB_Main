import { Component,Input, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Form,FormArray,Validators}from '@angular/forms'

import {FBsubject} from '../../fbmodel/fbsubjectdt';
@Component({
  selector: 'fbsubject',
  templateUrl: './fbsubject.component.html',
  styleUrls: ['./fbsubject.component.css']
})
export class FbsubjectComponent implements OnInit {
  @Input('subjectComponentArray') public subjectComponentArray:FormArray;
  @Input('subject') public subject:FBsubject;

  public subjectFG:FormGroup;
  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.subjectFG=this.fb.group({
        subname:[this.subject.subname]
    });
    this.subjectComponentArray.push(this.subjectFG);
  }}
