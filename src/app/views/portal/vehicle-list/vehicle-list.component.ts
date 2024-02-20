import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleListModel, VehicleModel } from '@core/vehicle/vehicle.model';
import { VehicleService } from '@core/vehicle/vehicle.service';
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  map,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  vehicles$ = new Observable<VehicleListModel[]>();
  searchQuery$ = new BehaviorSubject<string>('');

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicles$ = combineLatest([
      this.searchQuery$,
      this.vehicleService.getVehicles(),
    ]).pipe(
      map(([searchQuery, vehicles]) =>
        vehicles
          .map((vehicle) => new VehicleListModel(vehicle))
          .filter((vehicle) =>
            Object.values(vehicle).some((val: string) =>
              val.toLowerCase().includes(searchQuery)
            )
          )
      ),
      takeUntil(this.ngUnsubscribe)
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
