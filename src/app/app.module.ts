import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from '../components/components.module';
import {Geolocation} from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GlobalRef,BrowserGlobalRef } from '../providers/window-ref/window-ref';
import {AutoCompleteProvider} from '../providers/auto-complete/auto-complete';
import {LocalStorageService} from '../providers/storage/storage'
 
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,HttpModule,
    FormsModule,
    ComponentsModule,
     HttpClientModule ,
    IonicModule.forRoot(MyApp,{  preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    
  ],
  providers: [
  
    StatusBar,
    SplashScreen,
    Geolocation,{ provide: GlobalRef, useClass: BrowserGlobalRef },
    {provide: ErrorHandler, useClass: IonicErrorHandler},LocalStorageService,AutoCompleteProvider
        
  ]
})
export class AppModule {}
