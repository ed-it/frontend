import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarketComponent } from './market.component';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot()],
  declarations: [MarketComponent],
  exports: [MarketComponent]
})
export class MarketModule {}
