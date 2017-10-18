import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from '../details/details';
import {MorePage} from '../more/more';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController) {
    this.initializeItems();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }*/

  initializeItems() {
    this.items = [
      { title: 'AngularJS', img: 'AngularJS.svg'},
      { title: 'ReactJS', img: 'react.png'},
      { title: 'JavaScript', img: 'JavaScript.png'},
      { title: 'CSS3', img: 'css.png'}
    ];
  }
  moveTo(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present(MorePage);
    this.navCtrl.push(MorePage);
  }

}

