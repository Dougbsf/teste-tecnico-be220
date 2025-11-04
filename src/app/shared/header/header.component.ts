import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonMenuButton, IonToolbar, IonIcon, IonTitle, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonButtons, IonMenuButton, IonToolbar, IonTitle, IonButton]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
