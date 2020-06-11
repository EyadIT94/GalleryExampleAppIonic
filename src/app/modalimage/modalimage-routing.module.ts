import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalimagePage } from './modalimage.page';

const routes: Routes = [
  {
    path: '',
    component: ModalimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalimagePageRoutingModule {}
