import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersListComponent } from './owners-list/owners-list.component';
import { OwnersNewEditComponent } from './owners-new-edit/owners-new-edit.component';
import { OwnersRoutingModule } from './owners-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OwnersRoutingModule
  ],
  declarations: [OwnersListComponent,OwnersNewEditComponent]
})
export class OwnersModule { }
