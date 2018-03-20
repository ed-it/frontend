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

  journalPage: number;
  countPage: number;
  display: number;

  constructor(private api: TravelJournalApi) {
    this.journalPage = 0;
    this.countPage = 0;
    this.display = 100;
    this.travelJournal = [];
  }

  ngOnInit() {
    const travelJournal = this.api.getByTime();
    travelJournal.subscribe((data: any) => {
      this.travelJournal = data;
    });

    const systemByCount = this.api.getByCount();
    systemByCount.subscribe((data: any) => {
      this.systemByCount = data;
    });
  }

  get journal() {
    const result = this.travelJournal.slice(this.journalPage * this.display, (this.journalPage + 1) * this.display);
    return result;
  }

  get systemCount() {
    const result = this.systemKeys.slice(this.countPage * this.display, (this.countPage + 1) * this.display);
    return result;
  }

  get totalLyJumped() {
    return (this.travelJournal.map(jump => jump.params.JumpDist).reduce((reducer, distance) => reducer += distance, 0)).toFixed(2);
  }
}
