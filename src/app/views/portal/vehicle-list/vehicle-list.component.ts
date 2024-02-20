import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleModel } from '@core/vehicle/vehicle.model';
import { VehicleService } from '@core/vehicle/vehicle.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  vehicles: VehicleModel[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService
      .getVehicles()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((vehicles) => {
        this.vehicles = vehicles;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
