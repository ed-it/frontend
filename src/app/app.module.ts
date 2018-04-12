import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared.module';

import { AppComponent } from './app.component';

import { MarketModule } from './market/market.module';
import { StatusModule } from './status/status.module';
import { LocationModule } from './location/location.module';
import { TravelJournalModule } from './travel-journal/travel-journal.module';

import { PipDisplayPipe } from './status/pips-display/pip-pipe';
import { pipReducer } from './status/pips-display/pip-reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ pips: pipReducer }),
    FormsModule,
    NgbModule.forRoot(),
    SharedModule,
    MarketModule,
    StatusModule,
    LocationModule,
    TravelJournalModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
