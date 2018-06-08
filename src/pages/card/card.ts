import { MainPage } from './../main/main';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import{ Card } from '../../models/cards';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  colors= [{name:"Purple", code:"#d884ff"},
          {name:"Orange", code:"#ff8d60"},
          {name:"Blue", code:"#77c6ff"},
          {name:"Green", code:"#77ff8b"},
          {name:"Red", code:"#ff6b6b"},
          {name:"Brown", code:"#b26e49"},
          {name:"Black", code:"#000000"},
          {name:"Pink", code:"#ff82d7"},
          {name:"Yellow", code:"#fff877"},
        ]
  card = {} as Card;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private AFauth : AngularFireAuth, private afDB: AngularFireDatabase, storage: Storage) {
      // this.card.email = 
      storage.get('email').then((val) => {
        this.card.email = val;
      });
  }

  ionViewWillLoad() {

  }
  logForm(){
    console.log(this.card);
    this.createCard()
  }
  createCard(){
    this.AFauth.authState.subscribe(auth =>{
      this.afDB.list(`card/${auth.uid}`).push(this.card).then(() => this.navCtrl.setRoot(MainPage) )
   })
  }

}
