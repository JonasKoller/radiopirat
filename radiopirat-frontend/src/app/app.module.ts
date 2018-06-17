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
import { PlayerbarComponent } from './playerbar/playerbar.component';
import { MobileRadiostationCardComponent } from './mobile-radiostation-card/mobile-radiostation-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerbarComponent,
    MobileRadiostationCardComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
