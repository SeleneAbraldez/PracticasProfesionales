import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasasLindasPageRoutingModule } from './casas-lindas-routing.module';

import { CasasLindasPage } from './casas-lindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasasLindasPageRoutingModule
  ],
  declarations: [CasasLindasPage]
})
export class CasasLindasPageModule {}
