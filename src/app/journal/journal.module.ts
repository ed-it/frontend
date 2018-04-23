import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

// Containers
import { JournalContainerComponent } from './containers/journal-container/journal-container.component';

// Routes
import { JournalRoutingModule } from './routes/journal.routes';

@NgModule({
  imports: [CommonModule, SharedModule, JournalRoutingModule],
  declarations: [JournalContainerComponent],
  entryComponents: [JournalContainerComponent]
})
export class JournalModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule } from '@angular/forms';

// import { TravelJournalRoutingModule } from './travel-journal-routes.module';
// import { TravelJournalApi } from './travel-journal-api.service';

// import { SharedModule } from '../shared/shared.module';
// import { SystemTableComponent } from './system-table/system-table.component';
// import { JournalComponent } from './journal/journal.component';
// import { TravelJournalComponent } from './travel-journal.component';

// @NgModule({
//   imports: [CommonModule, SharedModule, NgbModule.forRoot(), FormsModule, TravelJournalRoutingModule],
//   declarations: [SystemTableComponent, JournalComponent, TravelJournalComponent],
//   exports: [TravelJournalComponent],
//   providers: [TravelJournalApi]
// })
// export class TravelJournalModule {}
