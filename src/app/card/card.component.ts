import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) cardImage: string = '';
  @Input({ required: true }) cardTitle: string = '';
  @Input() cardTitleValue: string = '';

  @Input() cardStyle: string = 'rgb(233, 129, 50)';

  @Input() cardLabel: string = '';
  @Input() cardAmount: string = '';
}
