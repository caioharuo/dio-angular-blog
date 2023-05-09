import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  bigCardData = dataFake[0];
  smallCardData = dataFake.filter((item) => item.id !== 1);
}
