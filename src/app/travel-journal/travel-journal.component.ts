import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-journal',
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

  constructor() {
    this.countPage = 0;
    this.display = 100;
    this.travelJournal = [];
    this.systemByCount = {};
  }

  ngOnInit() {}

  get systemCount() {
    const result = this.systemKeys.slice(
      this.countPage * this.display,
      (this.countPage + 1) * this.display
    );
    return result;
  }
}
