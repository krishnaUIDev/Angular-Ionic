import { Component,ViewChild,trigger, transition, style, state, animate, keyframes} from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { MainPage } from '../main/main';
import {SignPage} from '../sign/sign';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Browse";
  signIn: string = "Sign In";


  constructor(public navCtrl: NavController) { }
  skip(){
    this.navCtrl.push(MainPage);
  }
  slideChanged(){
    if(this.slides.isEnd()){
      this.skipMsg = "Alright, I Got It";
    }
  }
  sign(){
    this.navCtrl.push(SignPage);
  }

}
