import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient-list/patient.component';
import { PatientRoutingModule } from './patient-routing.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonAppModule } from 'src/app/common/common.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  imports: [
    CommonAppModule,
    PatientRoutingModule,
    NzTableModule,
    NzCollapseModule,
    NzDividerModule,
    NzSelectModule,
    NzToolTipModule,
    NzModalModule

  ],
  declarations: [PatientComponent]
})
export class PatientModule { }
