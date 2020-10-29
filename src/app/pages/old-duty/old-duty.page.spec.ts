import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OldDutyPage } from './old-duty.page';

describe('OldDutyPage', () => {
  let component: OldDutyPage;
  let fixture: ComponentFixture<OldDutyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDutyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OldDutyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
