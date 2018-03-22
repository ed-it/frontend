import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelJournalComponent } from './travel-journal.component';
import { JournalComponent } from './journal/journal.component';
import { SystemTableComponent } from './system-table/system-table.component';

import { JournalResolver } from './journal/journal-resolver.service';
import { SystemTableResolver } from './system-table/system-table-resolver.service';

const routes: Routes = [
  {
    path: 'journal',
    component: TravelJournalComponent,
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: SystemTableComponent,
        outlet: 'journal',
        resolve: {
          data: SystemTableResolver
        }
      },
      {
        path: '',
        component: JournalComponent,
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
  providers: [JournalResolver, SystemTableResolver]
})
export class TravelJournalRoutingModule {}
