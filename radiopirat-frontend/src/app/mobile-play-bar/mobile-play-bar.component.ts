import {Component} from '@angular/core';
import {RadioStation} from '../../models/radiostation.model';
import {RadioStationService} from '../services/radio-station.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-mobile-play-bar',
  templateUrl: './mobile-play-bar.component.html',
  styleUrls: ['./mobile-play-bar.component.scss']
})
export class MobilePlayBarComponent {

  currentRadioStation$: BehaviorSubject<RadioStation>;
  playing$: BehaviorSubject<boolean>;
  mute$: BehaviorSubject<boolean>;

  constructor(
    private radioStationService: RadioStationService
  ) {
    this.currentRadioStation$ = this.radioStationService.currentRadioStation$;
    this.playing$ = this.radioStationService.playing$;
    this.mute$ = this.radioStationService.mute$;
  }

  clickPlayButton() {
    this.radioStationService.changePlaying();
  }

  clickMuteButton() {
    this.radioStationService.changeMute();
  }

}
