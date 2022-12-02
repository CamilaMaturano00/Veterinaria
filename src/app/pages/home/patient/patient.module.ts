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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { PatientNewEditComponent } from './patient-new-edit/patient-new-edit.component';
import { QueryListComponent } from './query/query-list/query-list.component';
import { QueryNewEditComponent } from './query/query-new-edit/query-new-edit.component';
import { TurnNewEditComponent } from './query/turn/turn-new-edit/turn-new-edit.component';
import { TurnListComponent } from './query/turn/turn-list/turn-list.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';


@NgModule({
  imports: [
    CommonAppModule,
    PatientRoutingModule,
    NzTableModule,
    NzCollapseModule,
    NzDividerModule,
    NzSelectModule,
    NzToolTipModule,
    NzModalModule,
    NzDropDownModule,
    NzUploadModule
  ],
  declarations: [
    PatientNewEditComponent,
    PatientComponent,
    QueryListComponent,
    QueryNewEditComponent,
    TurnNewEditComponent,
    TurnListComponent
  ]
})
export class PatientModule { }
