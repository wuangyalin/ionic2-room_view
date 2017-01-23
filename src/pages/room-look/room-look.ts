import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RoomDetailPage} from '../room-detail/room-detail';
/*
  Generated class for the RoomLook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-room-look',
  templateUrl: 'room-look.html'
})
export class RoomLookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

  }

  showDetail(){
    this.navCtrl.push(RoomDetailPage);
  }

}
