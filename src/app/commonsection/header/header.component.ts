import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loggedInUser:string;
  constructor() { }

  ngOnInit() {

    let temp  = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedInUser=temp.userName;

  }
}
