import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/helloIonic/helloIonic';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HelloIonicPage;
  pages:Array<{title:string, component:any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController,
  ){

  }
}
