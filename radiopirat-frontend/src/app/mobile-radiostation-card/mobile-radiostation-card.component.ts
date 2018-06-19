import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Radiostation} from "../../models/radiostation.model";

@Component({
  selector: 'app-mobile-radiostation-card',
  templateUrl: './mobile-radiostation-card.component.html',
  styleUrls: ['./mobile-radiostation-card.component.scss']
})
export class MobileRadiostationCardComponent {

  constructor() {}

  @Input() public radiostation: Radiostation;

  @Output() public currentStationChanged = new EventEmitter<Radiostation>();

  changeCurrent() {
    this.currentStationChanged.emit(this.radiostation);
  }

  changeLikeStatus(event) {
    this.radiostation.like = !this.radiostation.like;
    event.stopPropagation();
  }
}
