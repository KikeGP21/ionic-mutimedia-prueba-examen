import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListConcatsPage } from './list-concats.page';

const routes: Routes = [
  {
    path: '',
    component: ListConcatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListConcatsPageRoutingModule {}
