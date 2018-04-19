import { Component, Input } from '@angular/core';

import * as statusModels from '../../models';

@Component({
  selector: 'app-pips-display',
  template: `
    <section class="card ship-status">
      <h3 class="card-title">Pip Management</h3>
      <div class="card-body">
        <div id="pip-container" *ngIf="pips; else noPips">
          <div class="heading"><h3>Sys</h3></div>
          <div class="heading"><h3>Eng</h3></div>
          <div class="heading"><h3>Wep</h3></div>
          <div #system class="pips systems">
            <span *ngFor="let display of pips.sys | arrayReverse" [ngClass]="display | pipDisplay"></span>
          </div>
          <div #engine class="pips engines">
            <span *ngFor="let display of pips.eng | arrayReverse" [ngClass]="display | pipDisplay"></span>
          </div>
          <div #weapon class="pips weapons">
            <span *ngFor="let display of pips.wep | arrayReverse" [ngClass]="display | pipDisplay"></span>
          </div>
        </div>
        <ng-template #noPips>
          <h2>No pip data</h2>
        </ng-template>
      </div>
    </section>
  `,
  styleUrls: ['pips-display.component.scss']
})
export class PipsDisplayComponent {
  @Input() pips: statusModels.PipDisplay;
}
