import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {RadioStation} from '../../models/radiostation.model';
import {RADIO_STATIONS} from '../radiostations';
import {BehaviorSubject} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RadioStationService {

  public radioStations$: BehaviorSubject<RadioStation[]>;
  public currentRadioStation$: BehaviorSubject<RadioStation>;
  public playing$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public mute$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private audio = new Audio();

  constructor(
    private title: Title,
    private localStorageService: LocalStorageService
  ) {
    this.audio.volume = 1;
    this.audio.autoplay = true;

    const radioStations: RadioStation[] = [];

    for (const radioStation of RADIO_STATIONS) {
      radioStations.push({...radioStation, like: this.isStationLiked(radioStation.id)});
    }

    radioStations.sort((x, y) => (x.like === y.like) ? 0 : x.like ? -1 : 1);

    this.radioStations$ = new BehaviorSubject<RadioStation[]>(radioStations);

    const lastPlayingRadioStationId = this.getLastPlayingId();
    let lastPlayingRadioStation = null;

    if (lastPlayingRadioStationId !== null) {
      lastPlayingRadioStation = this.getStationById(lastPlayingRadioStationId);
    } else {
      lastPlayingRadioStation = radioStations[0];
    }

    this.currentRadioStation$ = new BehaviorSubject<RadioStation>(lastPlayingRadioStation);
    this.setCurrentStation(lastPlayingRadioStation.id);
    this.setPlaying(false);
  }

  private getLastPlayingId(): number {
    const currentRadioStationId = this.localStorageService.get('CURRENT_STATION_ID');
    if (currentRadioStationId === undefined) {
      return null;
    } else {
      return currentRadioStationId;
    }
  }

  private isStationLiked(stationId: number): boolean {
    return this.localStorageService.get('IS_LIKED_' + stationId) === true;
  }

  public changeRadioStationLike(stationId: number) {
    const isLiked = this.isStationLiked(stationId);

    this.localStorageService.set('IS_LIKED_' + stationId, !isLiked);

    const stations = this.radioStations$.getValue();
    for (const station of stations) {
      if (station.id === stationId) {
        station.like = !isLiked;
        break;
      }
    }
    this.radioStations$.next(stations);
  }

  private getStationById(stationId: number) {
    const stations = this.radioStations$.getValue();
    for (const station of stations) {
      if (station.id === stationId) {
        return station;
      }
    }
    return null;
  }

  public setCurrentStation(stationId: number) {
    const radioStation = this.getStationById(stationId);

    this.audio.src = radioStation.url;
    this.title.setTitle('Radiopirat - ' + radioStation.title);
    this.localStorageService.set('CURRENT_STATION_ID', stationId);

    this.currentRadioStation$.next(radioStation);
    this.setPlaying(true);
  }

  public setPlaying(newVal: boolean) {
    if (newVal) {
      this.audio.src = this.currentRadioStation$.getValue().url;
    } else {
      this.audio.src = '';
      this.audio.pause();
    }

    this.playing$.next(newVal);
  }

  public changePlaying() {
    const playing = this.playing$.getValue();
    this.setPlaying(!playing);
  }

  public changeMute() {
    const mute = this.mute$.getValue();

    this.audio.muted = !mute;
    this.mute$.next(!mute);
  }
}
