import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsBesoinCardComponent } from 'src/app/components/animations-besoin-card/animations-besoin-card.component';



@NgModule({
  declarations: [AnimationsBesoinCardComponent],
  imports: [
    CommonModule
  ],
  exports: [AnimationsBesoinCardComponent]
})
export class SharedModule { }
