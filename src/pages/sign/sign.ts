import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }
  presentLoading(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

}
