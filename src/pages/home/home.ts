import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: NavController;
  @ViewChild('map') mapElement:ElementRef; 
  map:any;
  constructor(navCtrl : NavController,public geolocation:Geolocation) {
    this.nav=navCtrl;
  }
  ionViewDidLoad(){
   
    this.loadMap();
  }
 
  loadMap(){
   
    this.geolocation.getCurrentPosition().then((position) => {
      
           let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     
           let mapOptions = {
             center: latLng,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP
           }
      
           this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      console.log(this.map);
         }, (err) => {
           console.log(err);
         });

 
  }
  addMarker(){
    console.log("Inside addmarker");
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.getCenter()
     });
    
     let content = "<h4>Information!</h4>";         
    
     this.addInfoWindow(marker, content);
    
   }
   addInfoWindow(marker, content){
    console.log(content+marker);
     let infoWindow = new google.maps.InfoWindow({
       content: content
     });
    
     google.maps.event.addListener(marker, 'click', () => {
       infoWindow.open(this.map, marker);
     });
    
   }
}
