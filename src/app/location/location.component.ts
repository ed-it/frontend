import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LocationApi } from './location-api.service';

@Component({
  selector: 'app-location',
  providers: [LocationApi],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locationData: any;
  locationDataKeys: string[];

  constructor(private api: LocationApi) {
    this.locationData = {
      params: {}
    };
  }

  ngOnInit() {

    const lastLocation = this.api.getLocationData();
    lastLocation.subscribe((data: any) => {
      const { event, timestamp, params } = data;
      this.locationData = data;
      this.locationDataKeys = Object.keys(this.locationData);
    });
  }
}
