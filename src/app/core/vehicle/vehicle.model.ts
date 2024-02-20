export interface VehicleModel {
  readonly name: string;
  readonly manufacturer: string;
  readonly model: string;
  readonly year: number;
  readonly color: string;
  readonly type: string;
  readonly fuelType: string;
  readonly mileage: number;
  readonly price: number;
  readonly licensePlate: string;
  readonly active: boolean;
}

export class VehicleListModel {
  name: string;
  manufacturer: string;
  model: string;
  year: number;
  type: string;
  fuelType: string;
  licensePlate: string;
  active: boolean;

  constructor(data: VehicleModel) {
    this.name = data.name;
    this.manufacturer = data.manufacturer;
    this.model = data.model;
    this.year = data.year;
    this.type = data.type;
    this.fuelType = data.fuelType;
    this.licensePlate = data.licensePlate;
    this.active = data.active;
  }
}
