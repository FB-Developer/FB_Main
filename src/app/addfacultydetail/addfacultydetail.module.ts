import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacultysubjectComponent } from './facultysubject/facultysubject.component';
import { FacultyrootComponent } from './facultyroot/facultyroot.component';
import { SectionlistComponent } from './sectionlist/sectionlist.component';
import { SectionComponent } from './sectionlist/section/section.component'
@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  declarations: [FacultysubjectComponent, FacultyrootComponent, SectionlistComponent, SectionComponent],
  exports:[FacultyrootComponent]
})
export class AddfacultydetailModule { }
