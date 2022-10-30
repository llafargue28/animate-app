import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BesoinsAnimationPageRoutingModule } from './besoins-animation-routing.module';

import { BesoinsAnimationPage } from './besoins-animation.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BesoinsAnimationPageRoutingModule,
    SharedModule
  ],
  declarations: [BesoinsAnimationPage]
})
export class BesoinsAnimationPageModule {}
