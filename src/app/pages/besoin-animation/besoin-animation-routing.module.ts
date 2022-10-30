import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BesoinAnimationPage } from './besoin-animation.page';

const routes: Routes = [
  {
    path: '',
    component: BesoinAnimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BesoinAnimationPageRoutingModule {}
