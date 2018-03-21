import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelJournalComponent } from './travel-journal.component';
import { Journal } from './journal/journal.component';
import { SystemTable } from './system-table/system-table.component';

import { JournalResolver } from './journal/journal-resolver.service';
import { SystemTableResolver } from './system-table/system-table-resolver.service';

const routes: Routes = [
  {
    path: 'journal',
    component: TravelJournalComponent,
    children: [
      {
        path: 'system-list',
        pathMatch: 'full',
        component: SystemTable,
        outlet: 'journal',
        resolve: {
          data: SystemTableResolver
        }
      },
      {
        path: '',
        component: Journal,
        outlet: 'journal',
        resolve: {
          data: JournalResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [JournalResolver]
})
export class TravelJournalRoutingModule {}
