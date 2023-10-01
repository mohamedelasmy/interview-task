import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTaskRoutingModule } from './list-task-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListTaskComponent } from './list-task.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    EditTaskComponent,
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    ListTaskRoutingModule,
    NgxPaginationModule,
    NgApexchartsModule
  ]
})
export class ListTaskModule { }
