import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatusContainerComponent } from '../containers/status-container/status-container.component';
import { StatusGuard } from '../guards/status.guard';

const routes: Routes = [
  {
    path: 'status',
    canActivate: [StatusGuard],
    children: [{ path: '', component: StatusContainerComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule {}
