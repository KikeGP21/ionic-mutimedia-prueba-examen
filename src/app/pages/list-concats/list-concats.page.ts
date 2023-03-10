import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ListConcatsPageModule } from './list-concats.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-concats',
  templateUrl: './list-concats.page.html',
  styleUrls: ['./list-concats.page.scss'],
})
export class ListConcatsPage implements OnInit {
  // 4.1º Poner el título de la página “list-contacts” a través de un binding con variable y que se denomine: “Lista de contactos”:
  public titulo: String = 'Lista de contactos';
  // 6.1º Desde la págna “list-contacts” tenéis que llamar al servicio que habéis creado nuevo “get_contacts” para traeros la información que vamos a pintar en esta página.
  public contactos: any;

  // 6.2º
  constructor(
    private _contactsService: ContactsService,
    private _router: Router
  ) {}

  /**
   * Llama al servicio de obtener fotos de la clase 'photos.service.ts'
   */
  ngOnInit() {
    // 6.3º
    this._contactsService.get_contacts().subscribe((data) => {
      this.contactos = data;
      this.contactos = this.contactos.data;
    });
  }

  view_Contact(contact: ListConcatsPageModule) {
    this._router.navigate([
      '/list-concats/contacts-detail',
      { contact: JSON.stringify(contact) },
    ]);
  }
}
