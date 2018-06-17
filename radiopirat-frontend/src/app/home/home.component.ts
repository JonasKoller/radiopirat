import {Component, OnInit} from '@angular/core';
import {Radiostation} from "../interfaces/radiostation.model";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public radios = [
    { title: 'Radio SRF 3', subtitle: 'srf.ch/radio-srf-3', url: 'http://stream.srg-ssr.ch/m/drs3/mp3_128', like: false },
    { title: 'Energy Zürich', subtitle: 'energy.ch', url: 'http://energyzuerich.ice.infomaniak.ch/energyzuerich-high.mp3', like: false },
    { title: 'RTS Couleur 3', subtitle: 'rts.ch', url: 'http://stream.srg-ssr.ch/m/couleur3/aacp_96', like: false },
    { title: 'Planet 105', subtitle: '105.ch', url: 'http://radio.netstream.ch/planet105_128k_mp3', like: false },
    { title: 'Radio 24', subtitle: 'radio24.ch', url: 'http://icecast.radio24.ch/radio24', like: false },
    { title: 'La 1ère', subtitle: 'rts.ch', url: 'http://stream.srg-ssr.ch/m/la-1ere/aacp_32', like: false },
    { title: 'Radio SRF 2 Kultur', subtitle: 'www.srf.ch/radio-srf-2-kultur', url: 'http://stream.srg-ssr.ch/m/drs2/mp3_128', like: false },
    { title: 'Radio Pilatus', subtitle: 'radiopilatus.ch', url: 'http://radiopilatus.ice.infomaniak.ch/pilatus64.mp3', like: false },
    { title: 'Energy Bern', subtitle: 'energy.ch', url: 'https://energybern.ice.infomaniak.ch/energybern-high.mp3', like: false },
    { title: 'Radio Zürisee', subtitle: 'radio.ch', url: 'http://mp3.radio.ch/radiozuerisee128k', like: false },
    { title: 'One FM', subtitle: 'onefm.ch', url: 'http://onefm.ice.infomaniak.ch/onefm-high.mp3', like: false },
    { title: 'Rouge FM', subtitle: 'rouge.com', url: 'http://rougefm.ice.infomaniak.ch/rougefm-high.mp3', like: false },
    { title: 'Radio 1', subtitle: 'radio1.ch', url: 'http://stream.radio1.ch:8000/128k', like: false },
    { title: 'Radio Argovia', subtitle: 'argovia.ch', url: 'http://icecastgreen.argovia.ch/argovia-rc-96-aac', like: false },
  ];

  public currentStation: Radiostation;
  public isPlaying = true;
  public isMuted = false;

  private audio = new Audio();

  constructor(private title: Title) {}

  ngOnInit() {
    this.audio.volume = 1;
    this.audio.autoplay = true;
    this.changeCurrent(this.radios[0]);
  }

  changeCurrent(radio) {
    this.currentStation = radio;
    this.audio.src = radio.url;
    this.title.setTitle('Radiopirat - ' + this.currentStation.title);
    this.audio.play();
  }

  changeIsPlaying(playing) {
    this.isPlaying = playing;

    if (this.isPlaying) {
      this.changeCurrent(this.currentStation);
    }
    else {
      this.audio.pause();
    }
  }

  changeIsMuted(muted) {
    this.isMuted = muted;
    this.audio.muted = this.isMuted;
  }

}
