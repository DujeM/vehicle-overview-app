import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'VehicleNamePipe',
})
export class VehicleNamePipe implements PipeTransform {
  transform(name: string): string {
    return name.split('#')[0].trim();
  }
}
