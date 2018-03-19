import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pips-display',
  templateUrl: './pips-display.component.html',
  styleUrls: ['./pips-display.component.scss']
})
export class PipsDisplay implements OnInit, OnChanges {
  @Input('pips') pips: any;

  @ViewChild('system') system: ElementRef;
  @ViewChild('engine') engine: ElementRef;
  @ViewChild('weapon') weapon: ElementRef;

  static valToElm(element, index, val) {
    if (index < Math.ceil(val)) {
      const check = val - index;
      if (check > 1 || Number.isInteger(check)) {
        element.classList.add('active');
      } else {
        element.classList.add('half-active');
      }
    }
  }

  updatePips() {
    console.log(this);
    const sysPips: any = Array.from(this.system.nativeElement.querySelectorAll('span')).reverse();
    const engPips: any = Array.from(this.engine.nativeElement.querySelectorAll('span')).reverse();
    const wepPips: any = Array.from(this.weapon.nativeElement.querySelectorAll('span')).reverse();

    const maxSysPips = Math.ceil(this.pips.sys);
    const maxEngPips = Math.ceil(this.pips.eng);
    const maxWepPips = Math.ceil(this.pips.wep);

    sysPips.forEach((element, index) => {
      element.classList.remove('active');
      element.classList.remove('half-active');
      PipsDisplay.valToElm(element, index, this.pips.sys);
    });
    engPips.forEach((element, index) => {
      element.classList.remove('active');
      element.classList.remove('half-active');
      PipsDisplay.valToElm(element, index, this.pips.eng);
    });
    wepPips.forEach((element, index) => {
      element.classList.remove('active');
      element.classList.remove('half-active');
      PipsDisplay.valToElm(element, index, this.pips.wep);
    });
  }

  ngOnInit() {
    this.updatePips();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updatePips();
  }
}
