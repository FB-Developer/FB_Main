import { Component,Input, OnInit } from '@angular/core';
import{FBsection}from'../../fbmodel/fbsectiondt';
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
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
      this.sectionList.push(new FBsection());
      this.rootFG.addControl('sectionList',this.fb.array([]));
  }
  addSection(){
    let section=new FBsection();
    section.section="";
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
