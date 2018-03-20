import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'status',
  loadChildren: 'app/status/status.module#StatusModule'
}, {
  path: 'market',
  loadChildren: 'app/market/market.module#MarketModule'
}, {
  path: 'location',
  loadChildren: 'app/location/location.module#LocationModule'
}, {
  path: 'journal',
  loadChildren: 'app/travel-journal/travel-journal.module#TravelJournalModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
