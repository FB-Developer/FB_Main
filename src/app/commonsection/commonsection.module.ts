import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AutherrorComponent } from './autherror/autherror.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, AutherrorComponent],
  exports:[HeaderComponent,AutherrorComponent,FooterComponent]
})
export class CommonsectionModule { }
