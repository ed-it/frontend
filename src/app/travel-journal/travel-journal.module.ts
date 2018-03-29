import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { TravelJournalRoutingModule } from './travel-journal-routes.module';
import { JournalApiService } from './journal/journal-api.service';
import { SystemListApiService } from './system-list/system-list-api.service';
import { FilterBarService } from './filter-bar/filter-bar.service';

import { SharedModule } from '../shared.module';
import { SystemListComponent } from './system-list/system-list.component';
import { JournalComponent } from './journal/journal.component';
import { TravelJournalComponent } from './travel-journal.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule,
    SharedModule,
    TravelJournalRoutingModule
  ],
  declarations: [
    FilterBarComponent,
    SystemListComponent,
    JournalComponent,
    TravelJournalComponent
  ],
  exports: [TravelJournalComponent],
  providers: [JournalApiService, SystemListApiService, FilterBarService]
})
export class TravelJournalModule {}
