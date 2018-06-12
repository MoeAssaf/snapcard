import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import {  FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Card } from '../../models/cards';

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
  data: any
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private AFauth: AngularFireAuth,
    private afDB : AngularFireDatabase) {
      this.data = {} as Card;
      this.data.address1 = this.navParams.get('address1');
      this.data.address2 = this.navParams.get('address2');
      this.data.address3 = this.navParams.get('address3');
      this.data.email = this.navParams.get('email');
      this.data.display_name = this.navParams.get('display_name');
      this.data.telefon = this.navParams.get('telefon');
      this.data.telefax = this.navParams.get('telefax');
      this.data.color = this.navParams.get('color');
      this.data.company = this.navParams.get('company');
      this.data.description = this.navParams.get('description');
      this.data.occupation = this.navParams.get('occupation');
      console.log('Test',this.navParams.get('email'))


      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewcardPage');
  }
  

}
