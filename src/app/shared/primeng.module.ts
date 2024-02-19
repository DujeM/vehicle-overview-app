import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimengModule {}
