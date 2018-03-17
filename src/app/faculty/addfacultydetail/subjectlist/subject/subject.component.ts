import { Component,Input, OnInit } from '@angular/core';
import{FBsubject}from'../../../../fbmodel/fbsubjectdt';
import {FormGroup,FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';
import {SubjectlistService} from '../../subjectlist.service';
import {SubmitfbdetailService} from '../../submitfbdetail.service'

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
  autoSubjectList:string[]=[];
  constructor(private fb:FormBuilder, private fbserve:SubmitfbdetailService, private subjectserve:SubjectlistService){}
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



    this.autoSubjectList=this.subjectserve.autoSubjectList;
    // this.subjectserve.subjectList.subscribe(dt=>{
    //       this.loadSubjectList(dt);
    // });
  }
  // loadSubjectList(tempdt)
  // {
  //   this.fbserve.getSubjectList(tempdt)
  //   .subscribe((dt)=>{
  //     if(dt.status)
  //     {
  //       this.autoSubjectList=dt.subjectlist;
  //       this.subjectserve.autoSubjectList=this.autoSubjectList;
  //     }
  //     else
  //     {
  //       this.autoSubjectList=[];
  //     }
  //   });
  // }
}
