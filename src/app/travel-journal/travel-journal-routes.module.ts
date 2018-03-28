import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelJournalComponent } from './travel-journal.component';
import { JournalComponent } from './journal/journal.component';
import { SystemListComponent } from './system-list/system-list.component';

import { JournalResolver } from './journal/journal-resolver.service';
import { SystemListResolver } from './system-list/system-list-resolver.service';

const routes: Routes = [
  {
    path: 'journal',
    component: TravelJournalComponent,
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: SystemListComponent,
        outlet: 'journal',
        resolve: {
          data: SystemListResolver
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
  providers: [JournalResolver, SystemListResolver]
})
export class TravelJournalRoutingModule {}
