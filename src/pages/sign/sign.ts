import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {EmailPage} from '../email/email';
import {AccountPage} from '../account/account';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
              public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }
  presentLoading(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present(EmailPage);
    this.navCtrl.push(EmailPage);
  }
  anAccount(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present(AccountPage);
    this.navCtrl.push(AccountPage);
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
