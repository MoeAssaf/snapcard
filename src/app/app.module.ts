import { Storage, IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";

import { Keyboard } from '@ionic-native/keyboard';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { NgxQRCodeModule } from 'ngx-qrcode2';


import { MainPage } from '../pages/main/main';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { CardPage } from '../pages/card/card';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    CardPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    CardPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Keyboard,
    
    

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
