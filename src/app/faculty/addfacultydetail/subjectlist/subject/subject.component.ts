import { Component,Input, OnInit } from '@angular/core';
import{FBsubject}from'../../../../fbmodel/fbsubjectdt';
import {FormGroup,FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';
@Component({
  selector: 'fb-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectFG:FormGroup;
  @Input('subjectList')
  subjectList:FormArray;
  @Input('subject')
  subject:FBsubject;
  constructor(private fb:FormBuilder){}
  ngOnInit() {
    this.subjectFG=this.fb.group({
      'subname':[this.subject.subname]
    });
    this.subjectList.push(this.subjectFG);
    this.subjectFG.parent.parent.controls['section'].valueChanges.subscribe(dt=>{
        if(dt!='Technician')
        {
          this.subjectFG.controls['subname'].validator=Validators.required;
        }
        else
        {
          this.subjectFG.controls['subname'].validator=Validators.nullValidator;
          this.subjectFG.controls['subname'].setErrors(null);
        }
        this.subjectFG.patchValue({'subname':''});
    });
  }
}
