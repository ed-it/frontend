import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TravelJournalRoutingModule } from './travel-journal-routes.module';

import { SharedModule } from '../shared.module';
import { SystemTable } from './system-table/system-table.component';
import { TravelJournalComponent } from './travel-journal.component';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot(), SharedModule, TravelJournalRoutingModule],
  declarations: [SystemTable, TravelJournalComponent],
  exports: [TravelJournalComponent]
})
export class TravelJournalModule {}
