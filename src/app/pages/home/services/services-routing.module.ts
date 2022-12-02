import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeluqueriaListComponent } from './hairdressing/peluqueria-list/peluqueria-list.component';
import { PeluqueriaNewEditComponent } from './hairdressing/peluqueria-new-edit/peluqueria-new-edit.component';
import { HostingListComponent } from './hosting/hosting-list/hosting-list.component';
import { HostingNewEditComponent } from './hosting/hosting-new-edit/hosting-new-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'hairdressing/list', component: PeluqueriaListComponent },
  { path: 'hairdressing/new', component: PeluqueriaNewEditComponent },
  { path: 'hairdressing/edit/:id', component: PeluqueriaNewEditComponent },
  { path: 'hosting/list', component: HostingListComponent },
  { path: 'hosting/new', component: HostingNewEditComponent },
  { path: 'hosting/edir/:id', component: HostingNewEditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }