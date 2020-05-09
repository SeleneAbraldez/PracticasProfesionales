import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasasFeasPageRoutingModule } from './casas-feas-routing.module';

import { CasasFeasPage } from './casas-feas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasasFeasPageRoutingModule
  ],
  declarations: [CasasFeasPage]
})
export class CasasFeasPageModule {}
