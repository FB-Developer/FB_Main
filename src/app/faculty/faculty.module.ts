import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import {AddfacultydetailModule} from './addfacultydetail/addfacultydetail.module';
import{FacultyrootComponent}from'./addfacultydetail/facultyroot/facultyroot.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonsectionModule} from '../commonsection/commonsection.module';
import { FormsComponent } from './forms/forms.component';
import { FormComponent } from './forms/form/form.component';
import {GetformsService} from './forms/getforms.service';
import { FileSelectDirective} from 'ng2-file-upload';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import {ManagestudentService} from './managestudent/managestudent.service'
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'facultydashboard' },
  {
    path:'facultydashboard',
    component:FacultydashboardComponent
  },
  {
    path:'studentdetail',
    component:ManagestudentComponent
  },
  {
    path:'addfacultydetail',
    children:[
        {
            path:'',
            component:FacultyrootComponent
        },
        {
            path:'update/:academicyear/:dept/:sem/:class/:degree',
            component:FacultyrootComponent
        }
    ]
  },
  {
    path:'forms',
    children:[
      {
        path:'',
        pathMatch:'full',
        component:FormsComponent
      },
      {
      path:'formdetail/:academicyear/:dept/:sem/:class/:degree',
      component:FormComponent
    }]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddfacultydetailModule,
    CommonsectionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacultydashboardComponent,
    FormsComponent,
    FormComponent,
    FileSelectDirective,
    ManagestudentComponent],
    providers:[GetformsService,ManagestudentService]
})
export class FacultyModule { }
