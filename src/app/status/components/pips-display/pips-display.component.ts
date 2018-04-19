import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  SimpleChanges,
  SimpleChange
} from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PipState } from './pip-reducer';

@Component({
  selector: 'app-pips-display',
  templateUrl: './pips-display.component.html',
  styleUrls: ['./pips-display.component.scss']
})
export class PipsDisplayComponent {
  pips$: Observable<PipState>;

  constructor(private store: Store<PipState>) {
    this.pips$ = store.pipe(select('pips'));
  }
}
