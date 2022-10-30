import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BesoinsAnimationPage } from './besoins-animation.page';

const routes: Routes = [
  {
    path: '',
    component: BesoinsAnimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BesoinsAnimationPageRoutingModule {}
