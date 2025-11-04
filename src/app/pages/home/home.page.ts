import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { body, trophy } from 'ionicons/icons';
import { OnlinePersonalTrainerListComponent } from "src/app/components/online-personal-trainer-list/online-personal-trainer-list.component";
import { TrainingProgramsListComponent } from "src/app/components/training-programs-list/training-programs-list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonImg, IonIcon, OnlinePersonalTrainerListComponent, TrainingProgramsListComponent]
})
export class HomePage implements OnInit {
  currentUser = {
    name: 'Douglas Brito',
    plan: 'purple',
  }

  planLevel: Record<string, {name: string, color: string}> = {
    'grey':{
      'name': 'Nível Cinza',
      'color': 'grey'
    },
    'blue':{
      'name': 'Nível Azul',
      'color': 'blue'
    },
    'gold':{
      'name': 'Nível Ouro',
      'color': 'gold'
    },
    'purple':{
      'name': 'Nível Roxo',
      'color': 'purple'
    },
  }

  constructor() {
    addIcons({ body, trophy });
  }

  getPlan(plan: string){
    if(this.planLevel[plan]){
      return this.planLevel[plan]
    }

    return {
      name: '',
      color: ''
    };
  }

  ngOnInit() {
  }

}
