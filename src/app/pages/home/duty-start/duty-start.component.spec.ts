import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDutyComponent } from './duty-start.component';

describe('PartyComponent', () => {
  let component: StartDutyComponent;
  let fixture: ComponentFixture<StartDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDutyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
