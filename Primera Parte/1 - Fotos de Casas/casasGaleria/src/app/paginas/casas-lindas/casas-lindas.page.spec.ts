import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasasLindasPage } from './casas-lindas.page';

describe('CasasLindasPage', () => {
  let component: CasasLindasPage;
  let fixture: ComponentFixture<CasasLindasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasasLindasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasasLindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
