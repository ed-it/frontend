import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelJournalComponent } from './travel-journal.component';

const routes: Routes = [{ path: 'journal', component: TravelJournalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelJournalRoutingModule {}
