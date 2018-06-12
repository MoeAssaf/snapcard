import { ViewcardPage } from './../viewcard/viewcard';
import { CardPage } from './../card/card';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import {  FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireList } from 'angularfire2/database/interfaces'

import { Card } from '../../models/cards';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Storage } from '@ionic/storage';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  userId: void
  path: any
  qrData: "failed"
  listCard$: FirebaseListObservable<any[]>
  listCardNames$: FirebaseListObservable<any[]>
  grabbedCard$: FirebaseListObservable<any[]>
  uid: any
  scannedCard: any

  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage, private afDB : AngularFireDatabase, private scanner: BarcodeScanner) {
    this.getCardsNames();
    // this.test()
    //this.getNames();


  }
  getCurrentPath() {
    this.AFauth.authState.subscribe(data => {
       this.path = ('card' + '/' + `${data.uid}`)
      return this.path;
      
    });
  }
  addCard(){
    console.log('Opening card form')
    this.navCtrl.push(CardPage)
  }
  logout(){
    this.storage.set('state','loggedout');
    this.navCtrl.setRoot(HomePage);
  }
  async getCardsNames(){
    const result = await this.AFauth.authState.subscribe(data => {
      var path = ('card' + '/' + `${data.uid}`);
      var path2 = ('card');
      this.uid = data.uid;
     //console.log(path);
      this.listCardNames$ = this.afDB.object(`${path}`).valueChanges();
                 //console.log(this.listCard$);
                 this.listCardNames$.subscribe(cards => {
                                    this.listCard$ =  this.getObjectData(cards); 
                                    return cards;
                                                                                 
                                                  });

   })
  }
  async grabCard(path){
    const result = await this.AFauth.authState.subscribe(data => {
     console.log(path);
       this.grabbedCard$ = this.afDB.object(path).valueChanges();
                 this.grabbedCard$.subscribe(card => {console.log('Grabbed card', card);
                                     this.scannedCard = this.grabbedCard$;
                                     this.navCtrl.push(ViewcardPage,[this.grabbedCard$])

                                                                                 
                                                  });

   })
  }
   getObjectData(data){
    const array = Object.keys(data).map(i => data[i]);


    let keys = Object.keys(data);
    var i;
    for (i = 0; i < keys.length; i++) { 
      array[i].barcode = `card/${this.uid}/${keys[i]}`;
}
  // console.log('index:',array[0]);
  console.log('Data:',array);
  return array

  }

  scan(){
    this.scanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.grabCard(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }
//   async test(){
//     const result = await this.AFauth.authState.subscribe(data => {
//       var path = 'card/deGwf1NDkoOmtLIpM5CRgTk9zt82/-LESduWfNFLY_LoZQ0J4';
//       this.uid = data.uid;
//      //console.log(path)
     
//       this.listCard = this.afDB.object(`${path}`).valueChanges();
//                  this.listCard.subscribe(cards => {console.log('Test',cards);
//                                     return cards;
                                                                                 
//                                                   });

//    })
// ;
   
//    ;


//   }

  // async getNames(){
  //   this.AFauth.authState.subscribe(data => {
  //     var path = ('card');
  //    //console.log(path);
  //    this.listCardNames$ = this.afDB.list(`${path}`).valueChanges();
  //                //console.log(this.listCardNames$);
  //                this.listCardNames$.subscribe(cards => {console.log(cards);
  //                                                   return cards;this.qrData ="failed"})
     
  // })}
  // ${auth.uid}
}

