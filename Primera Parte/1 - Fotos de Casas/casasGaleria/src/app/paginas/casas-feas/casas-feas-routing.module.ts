import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasasFeasPage } from './casas-feas.page';

const routes: Routes = [
  {
    path: '',
    component: CasasFeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasasFeasPageRoutingModule {}
