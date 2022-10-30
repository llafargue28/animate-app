import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BesoinAnimationPageRoutingModule } from './besoin-animation-routing.module';

import { BesoinAnimationPage } from './besoin-animation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BesoinAnimationPageRoutingModule
  ],
  declarations: [BesoinAnimationPage]
})
export class BesoinAnimationPageModule {}
