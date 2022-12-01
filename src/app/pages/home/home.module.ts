import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonAppModule } from '../../common/common.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    HomeRoutingModule,
    CommonAppModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class HomeModule { }