import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  photoCoverUrl: string = '';

  @Input()
  publicationDate: string = '';

  @Input()
  title: string = '';

  @Input()
  description: string = '';
}
