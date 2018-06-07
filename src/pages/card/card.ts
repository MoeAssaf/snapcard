import { MainPage } from './../main/main';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import{ Card } from '../../models/cards'
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
  colors= [{name:"Purple", code:"#d60eed"},
          {name:"Orange", code:"#ff6e00"},
          {name:"Blue", code:"#1e4fff"},
          {name:"Green", code:"#03d600"},
          {name:"Red", code:"#ff2b2b"},
          {name:"Brown", code:"#843919"},
          {name:"Black", code:"#000000"},
          {name:"Pink", code:"#ff4fa4"}
        ]
  card = {} as Card;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private AFauth : AngularFireAuth, private afDB: AngularFireDatabase) {
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
