import { Component, OnInit } from '@angular/core';
import {GetformsService} from './getforms.service';
import {config} from '../facultyconfig';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

class FormInfo{
  academicyear:string;
  dept:string;
  sem:string;
  class:string;
  degree:string;
}
@Component({
  selector: 'fb-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
fbroot:FormInfo[];
academicyearList=config.academicyearList;
departmentList=config.departmentList;
academicyear:string='2017-18';
dept:string='CE';
  constructor(private gf:GetformsService, private router:Router) { }

  ngOnInit() {let temp  = JSON.parse(localStorage.getItem('loggedInUser'));
    this.dept=temp.userDetail.dept;
    this.loadFormField();
  }
  loadFormField(){
    if(this.academicyear&&this.dept)
    {
      this.gf.getForms(this.academicyear,this.dept)
      .subscribe((result)=>{
        this.fbroot=result;
      });
    }
  }
  viewDetail(detail:FormInfo)
  {
    this.router.navigate(['faculty/forms/formdetail',detail.academicyear,detail.dept,detail.sem,detail.class,detail.degree]);
  }
  updateForm(detail:FormInfo)
  {
    this.router.navigate(['faculty/addfacultydetail/update',detail.academicyear,detail.dept,detail.sem,detail.class,detail.degree]);
  }
  deleteForm(detail:FormInfo){
      swal({
              title: 'Confirm Delete',
              text: 'Really Want to Delete?',
              type: 'question',
              showCancelButton:true,
              confirmButtonText: 'Delete',
              cancelButtonText:'Cancel'
            }).then((result)=>{
              if(result.value==true)
              {
                  this.gf.deleteFbDetail(detail.academicyear,detail.dept,detail.class,detail.sem,detail.degree)
                  .subscribe(dt=>{
                      console.log('****',dt);
                  });
                swal({
                  title:"Success",
                  type:'success',
                  text:'Deleted Succesfully'
              }).then((result)=> {this.loadFormField();}
              );
        }});
  }
}
