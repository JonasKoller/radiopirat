import {Component} from '@angular/core';
import {RadioStation} from '../../models/radiostation.model';
import {RadioStationService} from '../services/radio-station.service';
import {BehaviorSubject} from 'rxjs';
import {merge} from "rxjs";
import {Observable} from "rxjs";
import {of} from "rxjs";
import {fromEvent} from "rxjs";
import {mapTo} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public radioStations$: BehaviorSubject<RadioStation[]> = null;
  public online: Observable<boolean>;

  constructor(
    private radioStationService: RadioStationService
  ) {
    this.radioStations$ = this.radioStationService.radioStations$;

    // Check if user is online or offline
    this.online = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );


  }

  playStation(radio: RadioStation) {
    this.radioStationService.setCurrentStation(radio.id);
  }

  public changeLike(radio: RadioStation) {
    this.radioStationService.changeRadioStationLike(radio.id);
  }

}
