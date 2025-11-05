import { Component, } from '@angular/core';
import { ISlide } from 'src/app/shared/slider/interfaces/slideInterface';
import { SliderComponent } from "src/app/shared/slider/slider.component";
import { Utils } from 'src/app/shared/utils';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-online-personal-trainer-list',
  templateUrl: './online-personal-trainer-list.component.html',
  styleUrls: ['./online-personal-trainer-list.component.scss'],
  imports: [SliderComponent]
})
export class OnlinePersonalTrainerListComponent {

  constructor(private utils: Utils){}
 
  slideList: ISlide[] = [
    {
      slideLabel: 'Novo Treino',
      slideImgPath: './assets/images/academia1.png',
      action: () => this.utils.redirectTo('/about'),
      overlayLabel: true,
      overlayIcon: 'add-outline',
    },
    {
      slideLabel: 'YOGA EXPRESS',
      slideImgPath: './assets/images/academia2.png',
      action: () => this.utils.callAlert('OLA', 'poladoful')
    }
  ]

  sliderTitle = 'PERSONAL ONLINE';

  newTraining =() => { this.utils.callAlert('Personal Online', 'vamos iniciar o treinamento')};
  
}
