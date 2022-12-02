import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { MedicineNewEditComponent } from './medicine/medicine-new-edit/medicine-new-edit.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsNewEditComponent } from './products/products-new-edit/products-new-edit.component';
import { SaleRoutingModule } from './sale-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule
  ],
  declarations: [
    MedicineListComponent,
    MedicineNewEditComponent,
    ProductsListComponent,
    ProductsNewEditComponent
  ]
})
export class SaleModule { }
