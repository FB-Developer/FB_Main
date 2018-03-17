import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-autherror',
  templateUrl: './autherror.component.html',
  styleUrls: ['./autherror.component.css']
})
export class AutherrorComponent implements OnInit {
errormesg;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.errormesg = params['errormesg'];

    });

  }

}
