import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-table',
  templateUrl: './system-table.component.html',
  styleUrls: ['./system-table.component.scss']
})
export class SystemTable implements OnInit {
  @Input('systems') systems: any;

  @Input('status') status: any;

  systemKeys: string[];

  ngOnInit() {
    this.systemKeys = Object.keys(this.systems);
  }
}
