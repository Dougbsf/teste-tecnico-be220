import { Component, OnInit } from '@angular/core';
import { home, homeOutline, homeSharp, informationCircle, informationCircleOutline, informationCircleSharp  } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink } from '@ionic/angular/standalone';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [ RouterLink, RouterLinkActive, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink ]
})
export class MenuComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];
  constructor() {
    addIcons({
      'home-outline': homeOutline,
      'home-sharp': homeSharp,
      'information-circle-outline': informationCircleOutline,
      'information-circle-sharp': informationCircleSharp,
    });  }

}
