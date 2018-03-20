import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatusComponent } from './status.component';

const routes: Routes = [{ path: 'status', component: StatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule {}
