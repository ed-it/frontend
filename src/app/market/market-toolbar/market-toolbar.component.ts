import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MarketToolbarState, UPDATE_MARKET_TOOLBAR } from './market-toolbar.reducer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-market-toolbar',
  templateUrl: './market-toolbar.component.html'
})
export class MarketToolbarComponent implements OnInit, OnDestroy {
  data$: Observable<MarketToolbarState>;
  toolbarGroup$: FormGroup;
  changeListener$: Subscription;

  constructor(private fb: FormBuilder, private store: Store<MarketToolbarState>) {
    this.data$ = store.pipe(select('marketToolbar'));
  }

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
    this.store.dispatch({ type: UPDATE_MARKET_TOOLBAR, payload: formState });
  }
}
