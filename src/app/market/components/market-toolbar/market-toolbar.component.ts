import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FormStyle } from '@angular/common';

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

    this.changeListener$ = this.toolbarGroup$.valueChanges.debounceTime(200).subscribe(this.onChange.bind(this));
  }

  ngOnDestroy() {
    this.changeListener$.unsubscribe();
  }

  onChange(formState) {
    this.filterUpdated.emit(formState);
  }
}
