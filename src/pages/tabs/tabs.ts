import { Component } from '@angular/core';

import { RoomLookPage } from '../room-look/room-look';
import { RoomRentPage } from '../room-rent/room-rent';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RoomLookPage;
  tab2Root: any = RoomRentPage;

  constructor() {

  }
}
