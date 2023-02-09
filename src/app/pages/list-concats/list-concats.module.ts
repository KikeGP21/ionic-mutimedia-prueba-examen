import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListConcatsPageRoutingModule } from './list-concats-routing.module';

import { ListConcatsPage } from './list-concats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListConcatsPageRoutingModule
  ],
  declarations: [ListConcatsPage]
})
export class ListConcatsPageModule {}
