import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.page.html',
  styleUrls: ['./contacts-detail.page.scss'],
})
export class ContactsDetailPage implements OnInit {

  public contact: any;

  constructor(private _activedRouted: ActivatedRoute) { }

  ngOnInit() {
    this._activedRouted.paramMap.subscribe((paramMap) => {
      let parametro: string | any = "";
      parametro = paramMap.get('contact');
      parametro = JSON.parse(parametro as string);
      this.contact = parametro;
    });
  }

}
