import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import {AutocompletePageComponent} from '../autocomplete-page/autocomplete-page';

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  address;

  constructor(               private ModalCtrl:ModalController) {
                this.address={
                  place:''
                };
  }
  showAddressModal () {
    let modal = this.ModalCtrl.create(AutocompletePageComponent);
   
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }

}
