import { CardPage } from './../card/card';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {  FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireList } from 'angularfire2/database/interfaces'

import { Card } from '../../models/cards';

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
  uid: any

  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage, private afDB : AngularFireDatabase) {
    this.getCardsNames();

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
                 this.listCardNames$.subscribe(cards => {console.log(cards);
                                    this.listCard$ =  this.getObjectData(cards); 
                                    return cards;
                                                                                 
                                                  });

   })
;
   
   ;


  }
   getObjectData(data){
    const array = Object.keys(data).map(i => data[i]);


    let keys = Object.keys(data);
    console.log('Keys:', keys)
    var i;
    for (i = 0; i < keys.length; i++) { 
      array[i].barcode = `${this.uid}/${keys[i]}`;
}
  // console.log('index:',array[0]);
  console.log('Data:',array);
  return array

  }

  
  
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

