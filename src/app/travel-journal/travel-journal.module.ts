import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { TravelJournalRoutingModule } from './travel-journal-routes.module';
import { JournalApiService } from './journal/journal-api.service';
import { SystemListApiService } from './system-list/system-list-api.service';

import { SharedModule } from '../shared.module';
import { SystemListComponent } from './system-list/system-list.component';
import { JournalComponent } from './journal/journal.component';
import { TravelJournalComponent } from './travel-journal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    SharedModule,
    TravelJournalRoutingModule
  ],
  declarations: [SystemListComponent, JournalComponent, TravelJournalComponent],
  exports: [TravelJournalComponent],
  providers: [JournalApiService, SystemListApiService]
})
export class TravelJournalModule {}
