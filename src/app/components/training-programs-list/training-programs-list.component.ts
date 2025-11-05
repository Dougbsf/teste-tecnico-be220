import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TrainingProgramsService } from 'src/app/services/training-programs';
import { ISlide } from 'src/app/shared/slider/interfaces/slideInterface';
import { SliderComponent } from "src/app/shared/slider/slider.component";
import { Utils } from 'src/app/shared/utils';
import { OnlinePersonalObject } from 'src/app/types/online-personal';

@Component({
  selector: 'app-training-programs-list',
  templateUrl: './training-programs-list.component.html',
  styleUrls: ['./training-programs-list.component.scss'],
  imports: [SliderComponent]
})
export class TrainingProgramsListComponent {

  private utils = inject(Utils);
  private trainingProgramsService = inject(TrainingProgramsService);

  showNewBadge = true;

  slideList: ISlide[] = []

  sliderTitle = 'PROGRAMAS'


   async ngOnInit(){
      this.loadPersonalItems();
    }
  
    async loadPersonalItems(){
      const itemsList = await firstValueFrom(this.trainingProgramsService.trainingPrograms);
      this.setUpSlides(itemsList);
      //Chamando de novo para dar mais volume
      this.setUpSlides(itemsList);
    }
  
    setUpSlides(itemsList: OnlinePersonalObject[]){
      itemsList.forEach(item => {
        this.slideList.push({
          slideImgPath: item.photo_url,
          slideLabel: item.name,
          lastTrained: this.slideList.length < 1,
          action: () => {}
        })
      });
    }
}
