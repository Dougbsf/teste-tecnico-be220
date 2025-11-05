import { Component, inject, OnInit, } from '@angular/core';
import { ISlide } from 'src/app/shared/slider/interfaces/slideInterface';
import { SliderComponent } from "src/app/shared/slider/slider.component";
import { Utils } from 'src/app/shared/utils';
import { addOutline } from 'ionicons/icons';
import { OnlinePersonalService } from 'src/app/services/online-personal';
import { firstValueFrom } from 'rxjs';
import { OnlinePersonalObject } from 'src/app/types/online-personal';

@Component({
  selector: 'app-online-personal-trainer-list',
  templateUrl: './online-personal-trainer-list.component.html',
  styleUrls: ['./online-personal-trainer-list.component.scss'],
  imports: [SliderComponent]
})
export class OnlinePersonalTrainerListComponent implements OnInit {

  private onlinePersonalService = inject(OnlinePersonalService)
  private utils = inject(Utils);
  // private onlinePersonalService = inject(OnlinePersonalService)

  slideList: ISlide[] = [
    {
      slideLabel: 'Novo Treino',
      slideImgPath: './assets/images/pesos_academia.jpg',
      action: () => this.utils.redirectTo('/about'),
      overlayLabel: true,
      overlayIcon: 'add-outline',
    },
  ]

  sliderTitle = 'PERSONAL ONLINE';

  newTraining =() => { this.utils.callAlert('Personal Online', 'vamos iniciar o treinamento')};

  async ngOnInit(){
    this.loadPersonalItems();
  }

  async loadPersonalItems(){
    const itemsList = await firstValueFrom(this.onlinePersonalService.onlinePersonalTrainings);
    this.setUpSlides(itemsList);
    //Chamando de novo para dar mais volume
    this.setUpSlides(itemsList);
  }

  setUpSlides(itemsList: OnlinePersonalObject[]){
    itemsList.forEach(item => {
      this.slideList.push({
        slideImgPath: item.photo_url,
        slideLabel: item.name,
        action: () => {}
      })
    });
  }
  
}
