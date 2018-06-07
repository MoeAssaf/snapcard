import { CardPage } from './../card/card';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
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

  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    this.AFauth.authState.subscribe( data => console.log(data));
  }
  addCard(){
    console.log('Opening card form')
    this.navCtrl.push(CardPage)
  }
  logout(){
    this.storage.set('state','loggedout');
    this.navCtrl.setRoot(HomePage);
  }
}
