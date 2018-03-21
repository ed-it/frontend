import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-system-table',
  templateUrl: './system-table.component.html',
  styleUrls: ['./system-table.component.scss']
})
export class SystemTable implements OnInit {
  @Input('systems') systems: any;

  page: number;
  display: number;

  constructor(private route: ActivatedRoute) {
    this.systems = {};
    this.page = 0;
    this.display = 50;
  }

  systemKeys: string[];

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      this.systems = data;
      this.systemKeys = Object.keys(this.systems);
    });
  }
}
