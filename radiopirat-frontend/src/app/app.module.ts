import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatSliderModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MobilePlayBarComponent } from './mobile-play-bar/mobile-play-bar.component';
import { MobileRadioStationCardComponent } from './mobile-radio-station-card/mobile-radio-station-card.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MobileNoInternetFooterComponent } from './mobile-no-internet-footer/mobile-no-internet-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobilePlayBarComponent,
    MobileRadioStationCardComponent,
    PrivacyPageComponent,
    MobileNoInternetFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
