import { Component, Input } from '@angular/core';

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {


  @Input('isFlipped') flipCard: boolean;

  constructor() {

  }

}
