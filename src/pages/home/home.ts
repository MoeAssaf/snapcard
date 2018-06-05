import { Component } from '@angular/core';
import { NavController , AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo = {}

  constructor(private AFauth : AngularFireAuth,public navCtrl: NavController,  private alertCtrl: AlertController) {

}
logForm(){
  console.log(this.todo);
  this.checkFields(this.todo)
}
register(){
  this.navCtrl.push(RegisterPage)
}
checkFields(field){
  if( field.email == null || field.name == "" ||
      field.password == null || field.password == ""){
        console.log('check fields');
        this.alert("Both fields are required! If you do not have an account please register a new one.")
      }else{
        this.authenticate(this.todo);
      }
}
alert(comment){
    console.log(comment);
    let ALERT = this.alertCtrl.create({
      title:"Alert",
      message: comment,
      buttons:[{text: " OK!"}]
    })
    ALERT.present()
}
authenticate(field){
  try{
    const result = this.AFauth.auth.signInWithEmailAndPassword(field.email, field.password);
    this.navCtrl.setRoot(MainPage);
  }
  catch(error){
    this.alert("Please check your email and password!")
    console.log(error);
  }
}
}
