import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FbrootComponent} from '../fbformv1/fbroot/fbroot.component';
import {LoginComponent} from '../login/login/login.component';
import {LogoutComponent} from '../login/login/logout.component';
import { RouterModule,Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {FbresultModule} from '../fbresult/fbresult.module';
import {AutherrorComponent} from '../commonsection/autherror/autherror.component';


const routeList:Routes = [
  {
    path:'',

    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'logout',component:LogoutComponent
  },
  {
    path:'fbform',
    canActivate:[AuthGuard],
    component:FbrootComponent
  },
  {
    path:'faculty',
    canActivate:[AuthGuard],
    loadChildren:'app/faculty/faculty.module#FacultyModule'
  },
  {
    path:'fbresult',
    canActivate:[AuthGuard],
    loadChildren:'app/fbresult/fbresult.module#FbresultModule'
  },
  {
    path:'autherror/:errormesg',component:AutherrorComponent
  },
  {
    path:'**',
    redirectTo:'autherror/Page not Found'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routeList)
  ],
  exports:[RouterModule],
  declarations: [],
  providers:[AuthGuard]
})

export class RoutingModule
{}
