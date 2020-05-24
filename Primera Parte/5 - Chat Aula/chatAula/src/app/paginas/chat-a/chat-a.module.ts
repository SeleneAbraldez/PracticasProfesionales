import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatAPageRoutingModule } from './chat-a-routing.module';

import { ChatAPage } from './chat-a.page';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatAPageRoutingModule,
    AutosizeModule
  ],
  declarations: [ChatAPage]
})
export class ChatAPageModule {}
