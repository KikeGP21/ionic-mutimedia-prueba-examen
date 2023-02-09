import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

 // 5º Crear en el servicio un método denominado “get_contacts” y que este método llame al siguiente servicio: https://reqres.in/api/users?page=2

  private url: string = "https://reqres.in/api/users?page=2"

  constructor(private _http: HttpClient) { }

  /**
   * Llama a servicio externo (web) para traer un listado de contactos
   */
  get_contacts(){
    return this._http.get(this.url)
  }
}
