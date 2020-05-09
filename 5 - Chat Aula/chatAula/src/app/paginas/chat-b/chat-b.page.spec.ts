import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatBPage } from './chat-b.page';

describe('ChatBPage', () => {
  let component: ChatBPage;
  let fixture: ComponentFixture<ChatBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
