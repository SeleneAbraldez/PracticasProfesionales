import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatAPage } from './chat-a.page';

describe('ChatAPage', () => {
  let component: ChatAPage;
  let fixture: ComponentFixture<ChatAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
