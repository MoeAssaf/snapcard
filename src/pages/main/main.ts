import { CardPage } from './../card/card';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {  FirebaseListObservable } from "angularfire2/database-deprecated";


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
  userId: void;
  path: any;
  qrData: "failed"
  listCard$: FirebaseListObservable<Card[]>;
  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage, private afDB : AngularFireDatabase) {
    this.getCards();
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
  async getCards(){
    this.AFauth.authState.subscribe(data => {
      var path = ('card' + '/' + `${data.uid}`);
     console.log(path);
     this.listCard$ = this.afDB.list(`${path}`).valueChanges();
                 console.log(this.listCard$);
                 this.listCard$.subscribe(cards => {console.log(cards);
                                                    return cards;this.qrData ="failed"})
     
   });
     
    

    

  }
  // ${auth.uid}
}
