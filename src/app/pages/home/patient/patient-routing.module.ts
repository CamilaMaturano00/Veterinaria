import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient-list/patient.component';
import { PatientNewEditComponent } from './patient-new-edit/patient-new-edit.component';
import { QueryListComponent } from './query/query-list/query-list.component';
import { QueryNewEditComponent } from './query/query-new-edit/query-new-edit.component';
import { TurnListComponent } from './query/turn/turn-list/turn-list.component';
import { TurnNewEditComponent } from './query/turn/turn-new-edit/turn-new-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: PatientComponent },
  { path: 'new', component: PatientNewEditComponent },
  { path: 'edit/:id', component: PatientComponent },

  { path: 'query/list', component: QueryListComponent },
  { path: 'query/new', component: QueryNewEditComponent },
  { path: 'edit/:id', component: QueryNewEditComponent },

  { path: 'turn/list', component: TurnListComponent },
  { path: 'turn/new', component: TurnNewEditComponent },
  { path: 'turn/:id', component: TurnNewEditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }