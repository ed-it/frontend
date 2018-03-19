import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TravelJournalComponent } from './travel-journal.component';
import { ArraySortPipe } from './order-pipe';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot()],
  declarations: [ArraySortPipe, TravelJournalComponent],
  exports: [TravelJournalComponent]
})
export class TravelJournalModule {}
