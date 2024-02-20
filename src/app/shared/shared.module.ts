import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeng.module';
import { RouterModule } from '@angular/router';

import { VehicleNamePipe } from './pipes/index';

@NgModule({
  declarations: [VehicleNamePipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, PrimengModule, VehicleNamePipe],
})
export class SharedModule {}
