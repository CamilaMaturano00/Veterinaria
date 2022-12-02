import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonAppModule } from '../../common/common.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { IconsProviderModule } from 'src/app/icons-provider.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    HomeRoutingModule,
    CommonAppModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule
  ]
})
export class HomeModule { }