import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Radiostation} from "../interfaces/radiostation.model";

@Component({
  selector: 'app-playerbar',
  templateUrl: './playerbar.component.html',
  styleUrls: ['./playerbar.component.scss']
})
export class PlayerbarComponent {

  @Input() public currentRadiostation: Radiostation;

  @Output() public playingChanged = new EventEmitter<boolean>();
  @Output() public mutedChanged = new EventEmitter<boolean>();

  public isPlaying = true;
  public isMuted = false;

  clickPlayButton() {
    this.isPlaying = !this.isPlaying;
    this.playingChanged.emit(this.isPlaying);
  }

  clickMuteButton() {
    this.isMuted = !this.isMuted;
    this.mutedChanged.emit(this.isMuted);
  }

}
