import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { TravelJournalRoutingModule } from './travel-journal-routes.module';
import { TravelJournalApi } from './travel-journal-api.service';

import { SharedModule } from '../shared.module';
import { SystemTableComponent } from './system-table/system-table.component';
import { JournalComponent } from './journal/journal.component';
import { TravelJournalComponent } from './travel-journal.component';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot(), FormsModule, SharedModule, TravelJournalRoutingModule],
  declarations: [SystemTableComponent, JournalComponent, TravelJournalComponent],
  exports: [TravelJournalComponent],
  providers: [TravelJournalApi]
})
export class TravelJournalModule {}
