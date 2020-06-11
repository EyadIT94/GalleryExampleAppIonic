import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalimagePageRoutingModule } from './modalimage-routing.module';

import { ModalimagePage } from './modalimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalimagePageRoutingModule
  ],
  declarations: [ModalimagePage]
})
export class ModalimagePageModule {}
