import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FbresultService} from '../fbresult.service';
@Component({
  selector: 'fb-detail-fb',
  templateUrl: './detail-fb.component.html',
  styleUrls: ['./detail-fb.component.css']
})

export class DetailFbComponent implements OnInit {
    academicyear;
    dept;fname;

    fbDetail;
    errorMesg;

    constructor(private route:ActivatedRoute,private fbserve:FbresultService) {}
    ngOnInit() {

      this.route.params.subscribe(params => {
        this.academicyear = params['academicyear'];
        this.dept=params['dept'];
        this.fname=params['fname'];
    });
    this.fbserve.getFacultyFB(this.academicyear,this.dept,this.fname)
        .subscribe(dt=>{
            if(dt.status)
                this.fbDetail=dt.mesg
            else
                this.errorMesg=dt.mesg;
        });
  }
}
