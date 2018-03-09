import { Component,Input, OnInit } from '@angular/core';
import{FBsection}from'../../../fbmodel/fbsectiondt';
import {FormGroup,FormBuilder,Form,FormArray,Validators} from '@angular/forms';
import{config}from'../../facultyroot/facultyconfig';
@Component({
  selector: 'fb-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  sectionFG:FormGroup;
  @Input('sectionList')
  sectionList:FormArray;
  @Input('section')
  section:FBsection;
  predefinedSectionList=config.sectionList;
  constructor(private fb:FormBuilder){}
  ngOnInit() {

    console.log('****',this.section);
    this.sectionFG=this.fb.group({
      section:[this.section.section,Validators.required],
      batch:[this.section.batch]
    });
    this.sectionList.push(this.sectionFG);
  }
}
