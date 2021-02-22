import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SideNavPage } from './sidenav.page';

describe('SideNavPage', () => {
  let component: SideNavPage;
  let fixture: ComponentFixture<SideNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
