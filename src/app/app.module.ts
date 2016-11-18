import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ParkListPage } from '../pages/park-list/park-list';
import { ParkMapPage } from '../pages/park-map/park-map';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
