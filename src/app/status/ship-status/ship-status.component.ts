import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ship-status',
  templateUrl: './ship-status.component.html',
  styleUrls: ['./ship-status.component.scss']
})
export class ShipStatus {
  @Input('currentShip') currentShip: any;

  @Input('status') status: any;
}
