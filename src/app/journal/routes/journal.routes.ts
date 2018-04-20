import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JournalContainerComponent } from '../containers/journal-container/journal-container.component';

const routes: Routes = [
  {
    path: 'journal',
    // canActivate: [MarketGuard],
    children: [{ path: '', component: JournalContainerComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule {}
