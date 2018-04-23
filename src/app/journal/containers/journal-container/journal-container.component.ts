import { Component } from '@angular/core';

@Component({
  selector: 'app-journal-container',
  styleUrls: ['journal-container.component.scss'],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><strong>Journal</strong></h5>
        <h6 class="card-subtitle">All your visits amognst the stars</h6>
        <div class="card-text"></div>
      </div>
    </div>
  `
})
export class JournalContainerComponent {}
