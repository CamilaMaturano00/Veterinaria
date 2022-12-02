import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { PeluqueriaListComponent } from './hairdressing/peluqueria-list/peluqueria-list.component';
import { PeluqueriaNewEditComponent } from './hairdressing/peluqueria-new-edit/peluqueria-new-edit.component';
import { HostingListComponent } from './hosting/hosting-list/hosting-list.component';
import { HostingNewEditComponent } from './hosting/hosting-new-edit/hosting-new-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [
    PeluqueriaListComponent,
    PeluqueriaNewEditComponent,
    HostingListComponent,
    HostingNewEditComponent
  ]
})
export class ServicesModule { }
