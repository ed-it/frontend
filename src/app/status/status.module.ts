import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StatusComponent } from './status.component';

@NgModule({
  imports: [CommonModule, NgbModule.forRoot()],
  declarations: [StatusComponent],
  exports: [StatusComponent]
})
export class StatusModule {}
