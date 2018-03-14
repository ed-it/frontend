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

  @ViewChild('system') system: ElementRef;
  @ViewChild('engine') engine: ElementRef;
  @ViewChild('weapon') weapon: ElementRef;

  @Output() change = new EventEmitter<number>();

  constructor(private streams: StatusStream, private api: StatusApi) {
    this.statusData = {};
  }

  get gameTime() {
    if (this.statusData && this.statusData.timestamp) {
      return new Date(this.statusData.timestamp).toISOString().slice(-13, -5);
    }
    return null;
  }

  ngOnInit() {
    const sysPips: any = Array.from(this.system.nativeElement.querySelectorAll('span')).reverse();
    const engPips: any = Array.from(this.engine.nativeElement.querySelectorAll('span')).reverse();
    const wepPips: any = Array.from(this.weapon.nativeElement.querySelectorAll('span')).reverse();

    function valToElm(element, index, val) {
      if (index < Math.ceil(val)) {
        const check = val - index;
        if (check > 1 || Number.isInteger(check)) {
          element.classList.add('active');
        } else {
          element.classList.add('half-active');
        }
      }
    }

    function updatePips(data) {
      const maxSysPips = Math.ceil(data.pips.sys);
      const maxEngPips = Math.ceil(data.pips.eng);
      const maxWepPips = Math.ceil(data.pips.wep);

      sysPips.forEach((element, index) => {
        element.classList.remove('active');
        element.classList.remove('half-active');
        valToElm(element, index, data.pips.sys);
      });
      engPips.forEach((element, index) => {
        element.classList.remove('active');
        element.classList.remove('half-active');
        valToElm(element, index, data.pips.eng);
      });
      wepPips.forEach((element, index) => {
        element.classList.remove('active');
        element.classList.remove('half-active');
        valToElm(element, index, data.pips.wep);
      });
    }

    this.streams.connect().subscribe((data: any) => {
      if (data.event === 'Status') {
        this.statusData = data;
        this.statusDataKeys = Object.keys(this.statusData);
      }
    });

    const lastStatusData = this.api.getStatusData();
    lastStatusData.subscribe((data: any) => {
      const { event, timestamp, params } = data;
      console.debug(`Triggering ${event}`, params);
      this.statusData = params;
      this.statusDataKeys = Object.keys(this.statusData);
      updatePips(this.statusData);
    });
  }
}
