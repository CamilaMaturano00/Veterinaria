import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersListComponent } from './owners-list/owners-list.component';
import { OwnersNewEditComponent } from './owners-new-edit/owners-new-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: OwnersListComponent },
  { path: 'new', component: OwnersNewEditComponent },
  { path: 'edit/:id', component: OwnersNewEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }