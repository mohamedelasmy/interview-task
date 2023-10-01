import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListTaskModule } from './Pages/list-task/list-task.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    ListTaskModule
  ]
})
export class ViewModule { }
