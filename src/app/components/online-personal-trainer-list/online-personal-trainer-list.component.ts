import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';

register();
@Component({
  selector: 'app-online-personal-trainer-list',
  templateUrl: './online-personal-trainer-list.component.html',
  styleUrls: ['./online-personal-trainer-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlinePersonalTrainerListComponent {
 spaceBetween = 10;

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }

}
