import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelJournalComponent } from './travel-journal.component';
import { JournalComponent } from './journal/journal.component';
import { SystemListComponent } from './system-list/system-list.component';

const routes: Routes = [
  {
    path: 'journal',
    component: TravelJournalComponent,
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: SystemListComponent,
        outlet: 'journal'
      },
      {
        path: '',
        component: JournalComponent,
        outlet: 'journal'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelJournalRoutingModule {}
