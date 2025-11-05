import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
import { ISlide } from './interfaces/slideInterface';
import { addIcons } from 'ionicons';
import { addOutline, body, trophy } from 'ionicons/icons';

register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent implements OnInit{

  @Input() slides: ISlide[] = [];
  @Input() title: string = '';
  @Input() newBadge: boolean = false;
  @Input() newActionButton?: () => void;

  spaceBetween = 10;

  constructor(){
    addIcons({addOutline, body, trophy});
  }

  ngOnInit(): void {
    console.log(this.slides, this.title);
  }

  callSlideAction(slide: ISlide){
    slide.action();
  }

  callNewActionButtonFunction(){
    if (this.newActionButton) {
      this.newActionButton();
    }
  }
}