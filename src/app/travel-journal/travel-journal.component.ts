import { Component, OnInit } from '@angular/core';

import { TravelJournalApi } from './travel-journal-api.service';

@Component({
  selector: 'app-travel-journal',
  providers: [TravelJournalApi],
  templateUrl: './travel-journal.component.html',
  styleUrls: ['./travel-journal.component.scss']
})
export class TravelJournalComponent implements OnInit {
  travelJournal: any;
  travelJournalKeys: string[];

  systemByCount: any;
  systemKeys: string[];

  countPage: number;
  display: number;

  constructor(private api: TravelJournalApi) {
    this.countPage = 0;
    this.display = 100;
    this.travelJournal = [];
    this.systemByCount = {};
  }

  ngOnInit() {
    // const travelJournal = this.api.getByTime();
    // travelJournal.subscribe((data: any) => {
    //   this.travelJournal = data;
    // });

    // const systemByCount = this.api.getByCount();
    // systemByCount.subscribe((data: any) => {
    //   this.systemByCount = data;
    // });
  }

  get systemCount() {
    const result = this.systemKeys.slice(
      this.countPage * this.display,
      (this.countPage + 1) * this.display
    );
    return result;
  }
}
