import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { PortalComponent } from './portal.component';

const portalRoutes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [{ path: '', component: VehicleListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(portalRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class PortalRoutingModule {}
