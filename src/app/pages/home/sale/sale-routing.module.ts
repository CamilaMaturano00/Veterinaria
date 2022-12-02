import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { MedicineNewEditComponent } from './medicine/medicine-new-edit/medicine-new-edit.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsNewEditComponent } from './products/products-new-edit/products-new-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'medicine/list', component:  MedicineListComponent},
  { path: 'medicine/new', component: MedicineNewEditComponent },
  { path: 'medicine/edit/:id', component: MedicineNewEditComponent },
  { path: 'products/list', component:  ProductsListComponent},
  { path: 'products/new', component: ProductsNewEditComponent },
  { path: 'products/edit/:id', component: ProductsNewEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }