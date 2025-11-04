import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-training-programs-list',
  templateUrl: './training-programs-list.component.html',
  styleUrls: ['./training-programs-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingProgramsListComponent {

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }

}
