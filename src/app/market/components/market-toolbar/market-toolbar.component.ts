import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FormStyle } from '@angular/common';

import { debounceTime, startWith } from 'rxjs/operators';

export interface MarketToolbarState {
  searchQuery: string;
  profitMargin: number;
  filterUnprofitable: boolean;
}

@Component({
  selector: 'app-market-toolbar',
  templateUrl: './market-toolbar.component.html'
})
export class MarketToolbarComponent implements OnInit, OnDestroy {

  @Input()
  data: any;

  @Output() filterUpdated: EventEmitter<MarketToolbarState> = new EventEmitter<MarketToolbarState>();

  toolbarGroup$: FormGroup;
  changeListener$: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.toolbarGroup$ = this.fb.group({
      profitMargin: this.fb.control(110),
      searchQuery: this.fb.control(''),
      filterUnprofitable: this.fb.control(false)
    });

    this.changeListener$ = this.toolbarGroup$.valueChanges
      .pipe(debounceTime(200), startWith({ searchQuery: '', profitMargin: 110, filterUnprofitable: false }))
      .subscribe(this.onChange.bind(this));
  }

  ngOnDestroy() {
    this.changeListener$.unsubscribe();
  }

  onChange(formState) {
    this.filterUpdated.emit(formState);
  }
}
