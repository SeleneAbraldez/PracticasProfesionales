import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasaLindaPageRoutingModule } from './casa-linda-routing.module';

import { CasaLindaPage } from './casa-linda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasaLindaPageRoutingModule
  ],
  declarations: [CasaLindaPage]
})
export class CasaLindaPageModule {}
