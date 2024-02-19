import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PortalComponent, VehicleListComponent],
  imports: [CommonModule, PortalRoutingModule, SharedModule],
})
export class PortalModule {}
