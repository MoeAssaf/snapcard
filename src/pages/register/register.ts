import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  todo = {}
  constructor( private AFauth : AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  logForm(){
    console.log(this.todo);
    const fields = this.todo;
    this.checkFields(fields);
  }
  checkFields(field){
    if( field.name == null || field.name == "" ||
   field.surname == null || field.surname == "" ||
   field.email == null || field.email == "" ||
   field.password1 == null || field.password1 == "" ||
   field.password2 == null || field.password2 == ""){
      this.alert("All fields are required, please make sure that you have provided all fields")
    }
    else if( field.password1 != field.password2){
      this.alert("Passwords do not match, please make sure that both passwords are the same")
    }
    else {
      const fields = this.todo;

      this.register(fields)
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
  async register(field){
    try{
      const result = await this.AFauth.auth.createUserWithEmailAndPassword(field.email, field.password1);
      console.log(result);
      this.navCtrl.setRoot(HomePage);
    }
    catch (error){
      this.alert("Password should be at least 6 charachters")
      console.error(error);
    }

  }

}
