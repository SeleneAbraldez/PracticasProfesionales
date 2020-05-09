import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasaLindaPage } from './casa-linda.page';

const routes: Routes = [
  {
    path: '',
    component: CasaLindaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasaLindaPageRoutingModule {}
