import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ship-status',
  templateUrl: './ship-status.component.html',
  styleUrls: ['./ship-status.component.scss']
})
export class ShipStatus {
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
