import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import {SignPage} from '../pages/sign/sign';
import {EmailPage} from '../pages/email/email';
import {AccountPage} from '../pages/account/account';
import {MenuPage} from '../pages/menu/menu';
import {MorePage} from '../pages/more/more';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SignPage,
    EmailPage,
    AccountPage,
    MenuPage,
    MorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SignPage,
    EmailPage,
    AccountPage,
    MenuPage,
    MorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
