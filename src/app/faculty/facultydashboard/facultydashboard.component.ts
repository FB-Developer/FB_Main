import { Component, OnInit } from '@angular/core';
import {serverconf} from 'assets/serverconf';
import {Router} from '@angular/router';
 import { FileUploader } from 'ng2-file-upload';
 //
// import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
@Component({
  selector: 'fb-facultydashboard',
  templateUrl: './facultydashboard.component.html',
  styleUrls: ['./facultydashboard.component.css']
  //
  // directives:[FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class FacultydashboardComponent implements OnInit {
  loggedInUser:string;dlgmesg:string;
  active:boolean=false;
  uploader:FileUploader = new FileUploader({url:serverconf.serverurl+'/upload'});
  error:string;
  item;
  constructor(private router:Router) { }
  ngOnInit() {
    this.loggedInUser=JSON.parse(localStorage.getItem('loggedInUser')).userName;
    this.uploader.onAfterAddingFile  = (item) => {
      this.item=item;

    item.withCredentials = false;
  };

  this.uploader.onErrorItem = (item, response, status, headers) =>{
    let temp=JSON.parse(response);
    if(!temp.success)
      this.error=temp.mesg;
    else
      this.dlgmesg='Succesfully Completed';
        };

  this.uploader.onSuccessItem = (item, response, status, headers) =>{
    let temp=JSON.parse(response);
    if(!temp.success)
      this.error=temp.mesg;
    else
      this.dlgmesg='Succesfully Completed';
    };
  }
  generateForm()
  {
    this.router.navigate(['faculty/addfacultydetail']);
  }

  geStudentteForm()
  {
    this.router.navigate(['faculty/addfacultydetail']);
  }
  viewForm()
  {
    this.router.navigate(['faculty/forms']);
  }
  uploadStudentList()
  {
    this.active=true;
  }
  manageStudent()
  {
    this.router.navigate(['faculty/studentdetail']);
  }
  closeModal()
  {
    this.active=false;
  }

}
