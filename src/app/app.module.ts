import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavPage } from './pages/sidenav/sidenav.page';
import {ToastrModule} from 'ngx-toastr';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { StartDutyComponent } from './pages/home/duty-start/duty-start.component';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@NgModule({
  declarations: [AppComponent, SideNavPage],
  entryComponents: [],
  imports: [BrowserModule,BrowserAnimationsModule, IonicModule.forRoot(), 
            AppRoutingModule, 
            ToastrModule.forRoot(),
            MatDialogModule
          ],
  providers: [
    StatusBar,
    SplashScreen,
    Base64ToGallery,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
