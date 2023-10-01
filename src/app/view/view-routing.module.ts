import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './Pages/list-task/list-task.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./Pages/list-task/list-task.module').then(m => m.ListTaskModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
