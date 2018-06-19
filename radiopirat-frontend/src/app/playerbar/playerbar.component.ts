import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Radiostation} from "../../models/radiostation.model";

@Component({
  selector: 'app-playerbar',
  templateUrl: './playerbar.component.html',
  styleUrls: ['./playerbar.component.scss']
})
export class PlayerbarComponent {

  @Input() public currentRadiostation: Radiostation;

  @Input() public playing: boolean;
  @Output() private playingChange = new EventEmitter<boolean>();

  @Input() public muted: boolean;
  @Output() private mutedChange = new EventEmitter<boolean>();

  clickPlayButton() {
    this.playing = !this.playing;
    this.playingChange.emit(this.playing);
  }

  clickMuteButton() {
    this.muted = !this.muted;
    this.mutedChange.emit(this.muted);
  }

}
