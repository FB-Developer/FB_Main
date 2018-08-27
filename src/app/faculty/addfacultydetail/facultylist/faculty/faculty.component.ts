import { Component,Input, OnInit } from '@angular/core';
import{FBfaculty}from'../../../../fbmodel/fbfacultydt';
import {FormGroup,FormBuilder,Form,FormArray,Validators} from '@angular/forms';
import {config} from '../../../facultyconfig';
import {SubmitfbdetailService} from '../../submitfbdetail.service'
@Component({
  selector: 'fb-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyFG:FormGroup;
  @Input('facultyList')
  facultyList:FormArray;
  @Input('faculty')
  faculty:FBfaculty;
  autoFacultyList:string[]=[];
  departmentList=config.departmentList;
  errormsg;
  constructor(private fb:FormBuilder, private fbserve:SubmitfbdetailService){}
  ngOnInit() {
    this.facultyFG=this.fb.group({
      fname:[this.faculty.fname,Validators.required],
      fdept:[this.faculty.fdept,Validators.required],
      fimage:[this.faculty.fimage]
    });
    this.facultyList.push(this.facultyFG);
    if(this.faculty.fdept=='')
      this.facultyFG.patchValue({fdept:'CE'});
    this.loadFacultyList();
  }
  loadFacultyList()
  {
    this.fbserve.getFacultyList(this.facultyFG.value.fdept)
    .subscribe((dt)=>{
      if(dt.status)
      {
        this.autoFacultyList=dt.facultylist;
        this.errormsg = null;
      }
      else
      {
        this.errormsg = dt.mesg;
        this.autoFacultyList=[];
      }

      if(this.facultyFG.value.fname=='')
        this.facultyFG.patchValue({fname:''});
    });
  }
uploadImage(event){
  var files = event.target.files;
     var file = files[0];

   if (files && file) {
       var reader = new FileReader();

       reader.onload =this._handleReaderLoaded.bind(this);
       reader.readAsBinaryString(file);
   }
}
_handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.facultyFG.patchValue({fimage:'data:image/jpeg;base64,'+btoa(binaryString)});
    }
}
