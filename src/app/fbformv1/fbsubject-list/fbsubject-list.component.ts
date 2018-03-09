import { Component,Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Form,Validators,FormArray} from '@angular/forms';
import {FBsubject} from '../fbmodel/fbsubjectdt';
@Component({
  selector: 'fbsubject-list',
  templateUrl: './fbsubject-list.component.html',
  styleUrls: ['./fbsubject-list.component.css']
})

export class FbsubjectListComponent implements OnInit {
  @Input('sectionFG') public sectionFG:FormGroup;
  @Input('subjectList') public subjectList:FBsubject[];

  constructor() { }
  ngOnInit() {
    this.sectionFG.addControl('subjectList',new FormArray([]));
  }}
