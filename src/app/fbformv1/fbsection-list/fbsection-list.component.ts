import { Component,Input, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Form,FormArray,Validators}from '@angular/forms'
import{FBsection}from'../fbmodel/fbsectiondt'
@Component({
  selector: 'fbsection-list',
  templateUrl: './fbsection-list.component.html',
  styleUrls: ['./fbsection-list.component.css']
})

export class FbsectionListComponent implements OnInit {
  @Input('rootFG') public rootFG:FormGroup;
  @Input('sectionList') public sectionList:FBsection[];

  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.rootFG.addControl('sectionList',new FormArray([]));
  }
}
