import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JournalContainerComponent } from '../containers/journal-container/journal-container.component';

const routes: Routes = [
  {
    path: 'journal',
    children: [{ path: '', component: JournalContainerComponent, pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule {}
