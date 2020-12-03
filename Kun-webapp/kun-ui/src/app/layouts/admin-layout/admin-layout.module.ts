import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { TableComponent } from '../../pages/table/table.component';
import { StudentComponent } from '../../pages/student/student.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
  ],
  declarations: [
    TableComponent,
    StudentComponent
  ]
})

export class AdminLayoutModule { }
