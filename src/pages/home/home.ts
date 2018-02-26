import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: NavController;
  
  constructor(navCtrl : NavController,public geolocation:Geolocation) {
    this.nav=navCtrl;
  }
  public componentData1: any = '';
  public userSettings2: any = {
    showRecentSearch: false,
    geoCountryRestriction: ['in'],
    searchIconUrl: 'http://downloadicons.net/sites/default/files/identification-search-magnifying-glass-icon-73159.png'
  };
  getCodeHtml(data: any): any {
    let _temp: any = JSON.stringify(data);
    _temp = _temp.split(',').join(',<br>');
    _temp = _temp.split('{').join('{<br>');
    _temp = _temp.split('}').join('<br>}');
    return _temp;
  }
  autoCompleteCallback1(data: any): any {
    this.componentData1 = JSON.stringify(data);
  }
 
  
}
