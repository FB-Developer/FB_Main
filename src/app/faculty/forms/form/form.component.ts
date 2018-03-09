import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetformsService} from '../getforms.service';
import { FBroot } from '../../../fbmodel/fbrootdt';
@Component({
  selector: 'fb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
academicyear:string;
dept:string;
degree:string;
sem:string;
class:string;
fbroot:FBroot;
  constructor(private route:ActivatedRoute, private gf:GetformsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.academicyear = params['academicyear'];
      this.dept=params['dept'];
      this.degree=params['degree'];
      this.class=params['class'];
      this.sem=params['sem'];
  });

      this.gf.getFormDetail(this.academicyear,this.dept,this.class,this.sem,this.degree)
    .subscribe((result)=>{
      this.fbroot=result;
    });
}
}
