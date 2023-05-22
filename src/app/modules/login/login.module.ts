import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ButtonModule } from 'src/app/common/core';
import { formsModule } from 'src/app/common/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LoginRoutingModule,
     // common modules
     ButtonModule,
     formsModule

  ],
  exports: [LoginComponent, LoginRoutingModule],
})
export class LoginModule { }
