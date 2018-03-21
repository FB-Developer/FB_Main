import { Component, OnInit } from '@angular/core';
import {FbresultService} from '../../fbresult/fbresult.service';
import {serverconf} from 'assets/serverconf';
import {Router} from '@angular/router';
 import { FileUploader } from 'ng2-file-upload';
 import swal from 'sweetalert2';

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
  changePwdDlg=false;loggedInUserId;
  flag:boolean=false;

  constructor(private fbserv:FbresultService,private router:Router) { }
  ngOnInit() {
    let temp  = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedInUserId=temp.userId;
    this.loggedInUser=temp.userName;
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
  openChangePasswordDlg()
  {
    this.changePwdDlg=true;
  }

  changePassword(fg:any)
  {
    const value=fg.value;
    this.flag=true;
    this.fbserv.changePassword(this.loggedInUserId,value.oldPwd,value.newPwd)
      .subscribe((dt)=>{
        if(dt.success)
            swal({
              title:"Success",
              type:'success',
              text:dt.mesg
            }).then((result)=>{
                this.changePwdDlg=false;
                this.flag=false;
                fg.reset();
            });
          else
              swal({
                title:"Error",
                type:'error',
                text:dt.mesg
              }).then((result)=>{
                  fg.reset();
                  this.flag=false;
              });
      },(error)=>
      {
        swal({
          title:"Error",
          type:'error',
          text:error
        }).then((result)=>{
            fg.reset();
            this.flag=false;
        });
      });
  }

  closeChangePwdDlg(fg:any){
    fg.reset();
    this.changePwdDlg=false;
  }
}
