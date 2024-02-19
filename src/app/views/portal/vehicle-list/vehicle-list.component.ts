import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '@core/vehicle/vehicle.model';
import { VehicleService } from '@core/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  vehicles: VehicleModel[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((res) => {
      this.vehicles = res;
    });
  }
}
