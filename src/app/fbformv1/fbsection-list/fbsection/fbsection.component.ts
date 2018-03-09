import { Component,Input, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Form,FormArray,Validators}from '@angular/forms'

import {FBsection} from '../../fbmodel/fbsectiondt';
@Component({
  selector: 'fbsection',
  templateUrl: './fbsection.component.html',
  styleUrls: ['./fbsection.component.css']
})
export class FbsectionComponent implements OnInit {
  @Input('sectionComponentArray') public sectionComponentArray:FormArray;
  @Input('section') public section:FBsection;

  public sectionFG:FormGroup;
  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.sectionFG=this.fb.group({
      section:[this.section.section]
    });
    this.sectionComponentArray.push(this.sectionFG);
  }}
