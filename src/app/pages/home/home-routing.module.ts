import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'owner',
        loadChildren: () => import('./owners/owners.module').then(m => m.OwnersModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule)
      },
      {
        path: 'service',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }