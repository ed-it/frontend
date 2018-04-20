import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelJournalComponent } from './travel-journal.component';

describe('TravelJournalComponent', () => {
  let component: TravelJournalComponent;
  let fixture: ComponentFixture<TravelJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
