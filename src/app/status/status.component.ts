import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { StatusApi } from './status-api.service';
import { StatusStream } from './status-stream.service';

@Component({
  selector: 'app-status',
  providers: [StatusApi, StatusStream],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  statusData: any;
  statusDataKeys: string[];

  constructor(private streams: StatusStream, private api: StatusApi) {
    this.statusData = {};
  }

  ngOnInit() {
    this.streams.connect().subscribe((data: any) => {
      console.log('Subscription', data);
      const { event, timestamp, params } = data;
      if (event === 'Status') {
        this.statusData = params;
        this.statusDataKeys = Object.keys(this.statusData);
      }
    });

    const lastStatusData = this.api.getStatusData();
    lastStatusData.subscribe((data: any) => {
      const { event, timestamp, params } = data;
      if (event === 'Status') {
        this.statusData = params;
        this.statusDataKeys = Object.keys(this.statusData);
      }
    });
  }
}
