import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RadioStation} from '../../models/radiostation.model';

@Component({
  selector: 'app-mobile-radiostation-card',
  templateUrl: './mobile-radio-station-card.component.html',
  styleUrls: ['./mobile-radio-station-card.component.scss']
})
export class MobileRadioStationCardComponent {

  @Input() public radioStation: RadioStation;

  @Output() public likeClick = new EventEmitter<null>();

  @Output() public cardClick = new EventEmitter<null>();

  onCardClick(e: MouseEvent) {
    this.cardClick.emit();

    e.stopPropagation();
    return false;
  }

  onLikeClick(e: MouseEvent) {
    this.likeClick.emit();

    e.stopPropagation();
    return false;
  }

}
