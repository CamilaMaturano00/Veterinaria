import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient-list/patient.component';
import { PatientRoutingModule } from './patient-routing.module';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    PatientRoutingModule,
    NzButtonModule
  ],
  declarations: [PatientComponent]
})
export class PatientModule { }
