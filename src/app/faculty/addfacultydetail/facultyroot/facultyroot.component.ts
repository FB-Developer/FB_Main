import { Component, ChangeDetectorRef,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Form,Validators} from '@angular/forms';
import {config} from '../../facultyconfig';
import{FBroot}from'../../../fbmodel/fbrootdt';
import{FBsection}from'../../../fbmodel/fbsectiondt';
import{FBsubject}from'../../../fbmodel/fbsubjectdt';
import{FBfaculty}from'../../../fbmodel/fbfacultydt';
import {Router,ActivatedRoute} from '@angular/router';
import {SubmitfbdetailService} from '../submitfbdetail.service';
import swal from 'sweetalert2';
import {GetformsService} from '../../forms/getforms.service';
import {SubjectlistService} from '../subjectlist.service';

@Component({
  selector: 'fb-facultyroot',
  templateUrl: './facultyroot.component.html',
  styleUrls: ['./facultyroot.component.css']
})
export class FacultyrootComponent implements OnInit {
  rootFG:FormGroup;
  rootDT:FBroot;
  academicyearList=config.academicyearList;
  degreeList=config.degreeList;
  departmentList=config.departmentList;
  semList=config.semList;
  classList= config.classList;
  loggedInUser:string;isUpdate=false;
  errorMesg;
  constructor(private fb:FormBuilder,private fbdetailserv:SubmitfbdetailService,private route:Router,private currentRoute:ActivatedRoute,private gf:GetformsService,private subject:SubjectlistService,private cd:ChangeDetectorRef) {
  }
  ngOnInit() {
    this.currentRoute.url.subscribe(dt=>{
      if(dt[0]){
        console.log('****',dt[0].path);
        this.currentRoute.params.subscribe((dt)=>{
            this.gf.getFormDetail(dt.academicyear,dt.dept,dt.class,dt.sem,dt.degree)
              .subscribe((result)=>{
                  this.isUpdate=true;
                  this.updateRootDT(result.mesg);
                });
            });
          }
          else{
                this.createRootDT();
                this.isUpdate=false;
          }
      this.cd.detectChanges();
    });
    // const temp = JSON.parse(localStorage.getItem('loggedInUser'));
    // this.loggedInUser=temp.userName;
    // this.createRootDT();
    //
    // this.rootFG=this.fb.group({
    //   academicyear:[this.rootDT.academicyear,Validators.required],
    //   degree:[this.rootDT.degree,Validators.required],
    //   dept:[this.rootDT.dept,Validators.required],
    //
    //   sem:[this.rootDT.sem,Validators.required],
    //   class:[this.rootDT.class,Validators.required]
    // });
    // this.cd.detectChanges();
  }

  createRootDT(){
      console.log('****');
      this.rootDT=new FBroot();
      this.rootDT.academicyear="2017-18";
      this.rootDT.degree="BE";
      this.rootDT.dept="CE";
      this.rootDT.sem="1";
      this.rootDT.class="1";
      this.rootDT.sectionList=new Array();


      let section=new FBsection();
      section.section="";
      section.subjectList=new Array();
      let subject =new FBsubject();
      subject.subname="";
      let faculty =new FBfaculty();

      faculty.fname="";
      faculty.fdept="";
      subject.facultyList=new Array();
      subject.facultyList.push(faculty);
      section.subjectList.push(subject);
      this.rootDT.sectionList.push(section);
      this.rootFG=this.fb.group({
        academicyear:[this.rootDT.academicyear,Validators.required],
        degree:[this.rootDT.degree,Validators.required],
        dept:[this.rootDT.dept,Validators.required],
        sem:[this.rootDT.sem,Validators.required],
        class:[this.rootDT.class,Validators.required]
      });
      this.onInfoChange();
  }
  updateRootDT(dt){
      this.rootDT=new FBroot();
      this.rootDT.academicyear=dt.academicyear;
      this.rootDT.degree=dt.degree;
      this.rootDT.dept=dt.dept;
      this.rootDT.sem=dt.sem;
      this.rootDT.class=dt.class;
      this.rootDT.sectionList=dt.sectionList;
      // this.rootDT.sectionList=new Array<FBsection>();
      // for(let section of dt.sectionList){
      //   let section1:FBsection=new FBsection();
      //   section1.section=section.section;
      //   section1.batch=section.batch;
      //   section1.subjectList=new Array();
      //   console.log(section1);
      //   this.rootDT.sectionList.push(section1);
      //  }
      this.rootFG=this.fb.group({
        academicyear:[{value:this.rootDT.academicyear,disabled:this.isUpdate},Validators.required],
        degree:[{value:this.rootDT.degree,disabled:this.isUpdate},Validators.required],
        dept:[{value:this.rootDT.dept,disabled:this.isUpdate},Validators.required],
        sem:[{value:this.rootDT.sem,disabled:this.isUpdate},Validators.required],
        class:[{value:this.rootDT.class,disabled:this.isUpdate},Validators.required]
      });
      this.onInfoChange();
  }
  onSubmit(value:FBroot){
    swal({
            title: 'Confirm Submit',
            text: 'Really Want to submit?',
            type: 'question',
            showCancelButton:true,
            confirmButtonText: 'Submit',
            cancelButtonText:'Cancel'
          }).then((result)=>{
          if(result.value==true){
            if(!this.isUpdate){
            this.fbdetailserv.sendFBDetail(value)
            .subscribe((temp) => {
              if (temp.status) {
                this.errorMesg = "";
                swal({
                        title: 'Success',
                        text: 'Submitted Succesfully',
                        type: 'success',
                        confirmButtonText: 'Done'
                      }).then((result)=>
                        this.route.navigate(['/faculty'])
                      );
              }
              else {
                swal({
                        title: 'Error',
                        text: temp.mesg,
                        type: 'error',
                        cancelButtonText:'Close'
                      });
              }
            },
            (error) => {
              this.errorMesg = error;
              swal({
                      title: 'Error',
                      text: this.errorMesg,
                      type: 'error',
                      cancelButtonText:'Close'
                    });
            }
            );
          }
          else{
            this.fbdetailserv.updateFBDetail(value)
            .subscribe((temp) => {
              if (temp.status) {
                this.errorMesg = "";
                swal({
                        title: 'Success',
                        text: 'Submitted Succesfully',
                        type: 'success',
                        confirmButtonText: 'Done'
                      }).then((result)=>
                        this.route.navigate(['/faculty'])
                      );
              }
              else {
                swal({
                        title: 'Error',
                        text: temp.mesg,
                        type: 'error',
                        cancelButtonText:'Close'
                      });
              }
            },
            (error) => {
              this.errorMesg = error;
              swal({
                      title: 'Error',
                      text: this.errorMesg,
                      type: 'error',
                      cancelButtonText:'Close'
                    });
            }
            );
          }
  }});
}
onInfoChange()
{
  const tempdt={
      dept:this.rootFG.value.dept,
      degree:this.rootFG.value.degree,
      sem:this.rootFG.value.sem
    }
  this.fbdetailserv.getSubjectList(tempdt)
  .subscribe((dt)=>{
  if(dt.status)
  {

    this.subject.autoSubjectList=dt.subjectlist;
  }
  else
  {
    this.subject.autoSubjectList=[];
  }
});
  // this.subject.updateSubjectList({
  //     dept:this.rootFG.value.dept,
  //     degree:this.rootFG.value.degree,
  //     sem:this.rootFG.value.sem
  //   });
}}
