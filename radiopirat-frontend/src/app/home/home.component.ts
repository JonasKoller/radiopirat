import {Component} from '@angular/core';
import {RadioStation} from '../../models/radiostation.model';
import {RadioStationService} from '../services/radio-station.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public radioStations$: BehaviorSubject<RadioStation[]> = null;

  constructor(
    private radioStationService: RadioStationService
  ) {
    this.radioStations$ = this.radioStationService.radioStations$;
  }

  playStation(radio: RadioStation) {
    this.radioStationService.setCurrentStation(radio.id);
  }

  public changeLike(radio: RadioStation) {
    this.radioStationService.changeRadioStationLike(radio.id);
  }

}
