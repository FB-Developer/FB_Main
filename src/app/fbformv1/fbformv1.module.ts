import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FbrootComponent } from './fbroot/fbroot.component';
import { FbsectionComponent } from './fbsection-list/fbsection/fbsection.component';
import { FbsubjectComponent } from './fbsubject-list/fbsubject/fbsubject.component';
import { FbfacultyComponent } from './fbfaculty-list/fbfaculty/fbfaculty.component';
import { FbsectionListComponent } from './fbsection-list/fbsection-list.component';
import { FbsubjectListComponent } from './fbsubject-list/fbsubject-list.component';
import { FbfacultyListComponent } from './fbfaculty-list/fbfaculty-list.component';
import {FBfetchDtServe} from './fbfecthdt.serve';
import {CommonsectionModule} from '../commonsection/commonsection.module';
@NgModule({
  imports: [
      CommonModule,
      HttpModule,
      ReactiveFormsModule,
      CommonsectionModule
  ],
     declarations: [
    FbrootComponent,
    FbsectionComponent,
    FbsubjectComponent,
    FbfacultyComponent,
    FbsectionListComponent,
    FbsubjectListComponent,
    FbfacultyListComponent],
    exports:[FbrootComponent],
    providers:[FBfetchDtServe]
})
export class Fbformv1Module {}
