import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RoomLookPage } from '../pages/room-look/room-look';
import { RoomRentPage } from '../pages/room-rent/room-rent';
import { RoomDetailPage } from '../pages/room-detail/room-detail';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    RoomRentPage,
    RoomLookPage,
    RoomDetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RoomLookPage,
    RoomRentPage,
    RoomDetailPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
