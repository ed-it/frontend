import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FormStyle } from '@angular/common';

import { debounceTime, startWith, takeUntil , tap} from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface MarketToolbarState {
  searchQuery: string;
  profitMargin: number;
  filterUnprofitable: boolean;
}

const defaultOptions: MarketToolbarState = {
  profitMargin: 110,
  searchQuery: '',
  filterUnprofitable: false
};

@Component({
  selector: 'app-market-toolbar',
  templateUrl: './market-toolbar.component.html'
})
export class MarketToolbarComponent implements OnInit, OnDestroy {
  @Input() data: any;

  @Output() filterUpdated: EventEmitter<MarketToolbarState> = new EventEmitter<MarketToolbarState>();

  @Output() refreshData: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  toolbarGroup$: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.toolbarGroup$ = this.fb.group({
      profitMargin: this.fb.control(defaultOptions.profitMargin),
      searchQuery: this.fb.control(defaultOptions.searchQuery),
      filterUnprofitable: this.fb.control(defaultOptions.filterUnprofitable)
    });

    this.toolbarGroup$.valueChanges
      .pipe(
        debounceTime(200),
        startWith(defaultOptions),
        tap(this.onChange.bind(this)),
        takeUntil(this.componentDestroyed$)
      ).subscribe();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  onChange(formState) {
    this.filterUpdated.emit(formState);
  }

  requestRefresh() {
    this.toolbarGroup$.setValue(defaultOptions);
    this.filterUpdated.emit(defaultOptions);
    this.refreshData.emit(true);
  }
}
