import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AutoCompleteProvider } from '../../providers/auto-complete/auto-complete';
import { URLSearchParams } from '@angular/http/src/url_search_params';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: NavController;
  constructor(navCtrl : NavController,public geolocation:Geolocation,public autocomplete:AutoCompleteProvider) {
      this.nav=navCtrl;
      this.autocomplete=autocomplete;
  }
  public componentData1: any = '';
  public componentData2: any = '';
  public componentData3: any = '';
  public activities;
  selectedValue:any='';
  public userSettings2: any = {
    showRecentSearch: false,
    geoCountryRestriction: ['in'],
    searchIconUrl: 'http://downloadicons.net/sites/default/files/identification-search-magnifying-glass-icon-73159.png'
  };
  public userSettings3: any = {
   
    geoLocDetailServerUrl: 'https://www.simplymovein.com/api/v4/get-location',
    geoPredictionServerUrl: 'https://www.simplymovein.com/api/v4/search-location',
    geoLatLangServiceUrl: 'https://www.simplymovein.com/api/v4/geocode',
    serverResponseListHierarchy: ['data', 'items'],
    serverResponseatLangHierarchy: ['data'],
    serverResponseDetailHierarchy: ['data'],
    recentStorageName: 'componentData2',
    libraries:'places',
    geoLocation: ['18.5498627','73.95233050000002'],
    geoRadius: 5000,
    type:'establishment',
    keyword:'bank'
  };

  // public userSettings4: any = {
    
  //    geoLocDetailServerUrl: 'https://www.simplymovein.com/api/v4/get-location',
  //    geoPredictionServerUrl: 'https://www.simplymovein.com/api/v4/search-location',
  //    geoLatLangServiceUrl: 'https://www.simplymovein.com/api/v4/geocode',
  //    serverResponseListHierarchy: ['data', 'items'],
  //    serverResponseatLangHierarchy: ['data'],
  //    serverResponseDetailHierarchy: ['data'],
  //    recentStorageName: 'componentData2',
  //    libraries:'places',
  //    placeId:'ChIJ99lGosXDwjsRSqB9yHlcdX4',
  //    geoLocation: ['18.5498627','73.95233050000002'],
  //    geoRadius: 5000,
  //    type:'establishment',
  //    keyword:'bank'
  //  };
  getCodeHtml(data: any): any {
    let _temp: any = JSON.stringify(data);
    _temp = _temp.split(',').join(',<br>');
    _temp = _temp.split('{').join('{<br>');
    _temp = _temp.split('}').join('<br>}');
    return _temp;
  }
   autoCompleteCallback1(data: any): any {
    this.componentData1 = JSON.stringify(data.data.geometry.location);
    //this.componentData1 = JSON.parse(this.componentData1).lat;
    console.log(JSON.parse(this.componentData1));
   
      console.log(JSON.stringify(this.componentData1.lng));
  }
  autoCompleteCallback2(data: any): any {
   
    this.componentData2 = JSON.stringify(data);

    console.log( this.componentData2);
    console.log(data);
  }
  // autoCompleteCallback3(data: any): any {
    
  //    this.componentData3 = JSON.stringify(data);
 
  //    console.log( this.componentData3);
  //    console.log(data);
  //  }
  onChange(selectedValue){
    console.info("Selected:",selectedValue);
    
  }
  
}
