import { Card } from './../../models/cards';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import {  FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Card } from '../../models/cards';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';

/**
 * Generated class for the ViewcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewcard',
  templateUrl: 'viewcard.html',
})
export class ViewcardPage {

  card: FirebaseListObservable<Card[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private AFauth: AngularFireAuth,
    private afDB : AngularFireDatabase) {
      // this.card = {} as Card;
      // this.card.address1 = this.navParams.get('address1');
      // this.card.address2 = this.navParams.get('address2');
      // this.card.address3 = this.navParams.get('address3');
      // this.card.email = this.navParams.get('email');
      // this.card.display_name = this.navParams.get('display_name');
      // this.card.telefon = this.navParams.get('telefon');
      // this.card.telefax = this.navParams.get('telefax');
      // this.card.color = this.navParams.get('color');
      // this.card.company = this.navParams.get('company');
      // this.card.description = this.navParams.get('description');
      // this.card.occupation = this.navParams.get('occupation');
    
      this.grabCard(this.navParams.get('path'))
      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewcardPage');

  }
  
  async grabCard(path){
    const result = await this.AFauth.authState.subscribe(data => {
     console.log(path);
       this.card = this.afDB.object(path).valueChanges();
                 this.card.subscribe(card => {console.log('Grabbed card', card);
                                    this.card = card;
                                      console.log('Test',this.card)

                                    //  let scannedCard = this.grabbedCard$;                                 
                                                  });
   })
  }
}
