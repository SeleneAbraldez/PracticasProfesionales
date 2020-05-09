import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasasFeasPage } from './casas-feas.page';

describe('CasasFeasPage', () => {
  let component: CasasFeasPage;
  let fixture: ComponentFixture<CasasFeasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasasFeasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasasFeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
