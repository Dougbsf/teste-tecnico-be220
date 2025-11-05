import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ISlide } from 'src/app/shared/slider/interfaces/slideInterface';
import { SliderComponent } from "src/app/shared/slider/slider.component";
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-training-programs-list',
  templateUrl: './training-programs-list.component.html',
  styleUrls: ['./training-programs-list.component.scss'],
  imports: [SliderComponent]
})
export class TrainingProgramsListComponent {

  constructor(private utils: Utils) { }

  showNewBadge = true;

  slideList: ISlide[] = [
    {
      slideLabel: 'LEVANTAMENTO DE PESO',
      slideImgPath: './assets/images/academia1.png',
      action: () => this.utils.redirectTo('/about'),
      lastTrained: true
    },
    {
      slideLabel: 'YOGA EXPRESS',
      slideImgPath: './assets/images/academia2.png',
      action: () => this.utils.callAlert('OLA', 'poladoful')
    }
  ]

  sliderTitle = 'PROGRAMAS'

}
