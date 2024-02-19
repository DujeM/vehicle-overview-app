import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const portalRoutes: Routes = [
  {
    path: '',
    component: VehicleListComponent,
    children: [{ path: '', component: VehicleListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(portalRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class PortalRoutingModule {}
