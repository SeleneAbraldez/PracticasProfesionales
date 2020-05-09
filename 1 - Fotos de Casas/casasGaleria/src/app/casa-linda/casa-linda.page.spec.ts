import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasaLindaPage } from './casa-linda.page';

describe('CasaLindaPage', () => {
  let component: CasaLindaPage;
  let fixture: ComponentFixture<CasaLindaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaLindaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasaLindaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
