import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FacultyrootComponent } from './facultyroot/facultyroot.component';
import { SectionlistComponent } from './sectionlist/sectionlist.component';
import { SectionComponent } from './sectionlist/section/section.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { SubjectComponent } from './subjectlist/subject/subject.component';
import { FacultylistComponent } from './facultylist/facultylist.component';
import { FacultyComponent } from './facultylist/faculty/faculty.component'
import {SubmitfbdetailService} from './submitfbdetail.service';

import {CommonsectionModule} from '../../commonsection/commonsection.module';
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';

@NgModule({
  imports: [
    CommonModule,CommonsectionModule,
    ReactiveFormsModule,Ng2AutoCompleteModule
  ],
  declarations: [FacultyrootComponent, SectionlistComponent, SectionComponent, SubjectlistComponent, SubjectComponent, FacultylistComponent, FacultyComponent],
  exports:[FacultyrootComponent],
  providers:[SubmitfbdetailService]
})
export class AddfacultydetailModule { }
