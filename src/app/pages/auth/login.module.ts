import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing';
import { CommonAppModule } from '../../common/common.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports:[
    CommonAppModule,
    LoginRoutingModule,
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }