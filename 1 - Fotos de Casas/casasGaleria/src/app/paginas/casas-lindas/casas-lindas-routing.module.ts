import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasasLindasPage } from './casas-lindas.page';

const routes: Routes = [
  {
    path: '',
    component: CasasLindasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasasLindasPageRoutingModule {}
