import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListConcatsPage } from './list-concats.page';

const routes: Routes = [
  {
    path: '',
    component: ListConcatsPage,
  },
  {
    path: 'contacts-detail',

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./contacts-detail/contacts-detail.module').then(
            (m) => m.ContactsDetailPageModule
          ),
      },
      {
        // 8º Ahora generamos una nueva página que nos servirá para visualizar el detalle de cada contacto, la página se denominará:   “contacts-detail” y se guardará dentro de la carpeta “list-contacts”:
        path: ':contactID',
        loadChildren: () =>
          import('./contacts-detail/contacts-detail.module').then(
            (m) => m.ContactsDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListConcatsPageRoutingModule {}
