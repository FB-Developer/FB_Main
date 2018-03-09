import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';
import {Fbformv1Module} from './fbformv1/fbformv1.module';
import {RoutingModule} from './routing/routing.module';
import {FacultyModule} from './faculty/faculty.module';
import {FbresultModule} from './fbresult/fbresult.module';

@NgModule({
  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    Fbformv1Module,
    RoutingModule,
    FacultyModule,
    FbresultModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
