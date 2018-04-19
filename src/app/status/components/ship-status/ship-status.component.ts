import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ship-status',
  template: `
  <div class="card ship-status text-center">

    <div class="card-title">
      <h2>{{currentShip.ShipName}}</h2>
      <h3>[{{currentShip.ShipIdent | uppercase}}]</h3>

    <div class="card-body">
      <div class="row" *ngIf="status">
        <div class="col-sm">
          Vehicle:
          <i [class]="vehicleType"></i>
        </div>
        <div class="col-sm">
          <strong>Mass Lock:</strong>
          <i [class]="getBoolStatus('fsd_status', 'masslock')"></i>
        </div>
        <div class="col-sm">
          <strong>Docked:</strong>
          <i [class]="getBoolStatus('docked', true)"></i>
        </div>
      </div>
      <div class="row" *ngIf="status">
        <div class="col-sm">
          <strong>Shields:</strong>
          <i [class]="getBoolStatus('shields_up', true)"></i>
        </div>
        <div class="col-sm">
          <strong>Landing Gear:</strong>
          <i [class]="getBoolStatus('landing_gear_down', 'Up')"></i>
        </div>
        <div class="col-sm">
          <strong>Lights:</strong>
          <i [class]="getBoolStatus('lights_on', true)"></i>
        </div>
      </div>
  </div>
  `,
  styleUrls: ['./ship-status.component.scss']
})
export class ShipStatusComponent {
  @Input('currentShip') currentShip: any;

  @Input('status') status: any;

  get vehicleType() {
    if (this.status.vehicle === 'SRV') {
      return 'fas fa-car';
    }
    return 'fas fa-space-shuttle';
  }

  getBoolStatus(key, value) {
    if (this.status[key] === value) {
      return 'fas fa-circle';
    }
    return 'fas fa-circle-notch';
  }
}
