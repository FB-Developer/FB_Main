import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OverallFbComponent } from './overall-fb/overall-fb.component';
import { DetailFbComponent } from './detail-fb/detail-fb.component';
import {FbresultServe} from './fbresult.serve';
import {CommonsectionModule} from '../commonsection/commonsection.module';
import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'overallfb' },
  {
    path:'overallfb',
    children:[
      {
        path:'',
        pathMatch:'full',
        component:OverallFbComponent
      },
      {
      path:'fbresultdetail/:academicyear/:dept/:fname',
      component:DetailFbComponent
    }]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonsectionModule,
    ChartsModule,
    RouterModule.forChild(routes)
],
  declarations: [OverallFbComponent, DetailFbComponent],
  providers:[FbresultServe]
})
export class FbresultModule {}
