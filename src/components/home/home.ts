import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import {AutocompletePageComponent} from '../autocomplete-page/autocomplete-page';
import { NavController } from 'ionic-angular/navigation/nav-controller';

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
  navctrl:NavController;
  address;

  constructor( nav:NavController, private ModalCtrl:ModalController) {
    this.navctrl=nav;
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
