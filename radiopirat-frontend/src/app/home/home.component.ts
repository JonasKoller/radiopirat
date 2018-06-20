import {Component, OnInit} from '@angular/core';
import {Radiostation} from "../../models/radiostation.model";
import {Title} from "@angular/platform-browser";
import {LocalstorageService} from "../services/localstorage.service";
import {RADIO_STATIONS} from "../radiostations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public radios: Radiostation[] = RADIO_STATIONS;

  public currentStation: Radiostation;
  private isPlaying = false;
  private isMuted = false;

  private audio = new Audio();

  constructor(private title: Title, private localStorageService: LocalstorageService) {}

  ngOnInit() {
    this.audio.volume = 1;
    this.audio.autoplay = true;
    this.playLastSessionStation();
  }

  playStation(radio: Radiostation) {
    this.currentStation = radio;
    this.audio.src = radio.url;
    this.title.setTitle('Radiopirat - ' + this.currentStation.title);
    this.muted = false;
    this.playing = true;
    this.localStorageService.set('currentStation', this.currentStation);
  }

  playLastSessionStation() {
    let station = this.localStorageService.get('currentStation');

    if (station) {
      this.playStation(station);
      this.playing = false;
    } else {
      this.playStation(this.radios[0]);
      this.playing = false;
    }
  }

  // Getter for playing
  get playing() {
    return this.isPlaying;
  }

  // Setter for playing (to stop music, if playing is off)
  set playing(value: boolean) {
    this.isPlaying = value;

    if (this.isPlaying) {
      this.audio.src = this.currentStation.url;
    }
    else {
      this.audio.pause();
    }
  }

  // Getter for muted
  get muted() {
    return this.isMuted;
  }

  // Setter for muted (turn volume down, if muted)
  set muted(value: boolean) {
    this.isMuted = value;
    this.audio.muted = this.isMuted;
  }

}
