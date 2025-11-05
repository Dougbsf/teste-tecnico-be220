import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { body, trophy } from 'ionicons/icons';
import { OnlinePersonalTrainerListComponent } from "src/app/components/online-personal-trainer-list/online-personal-trainer-list.component";
import { TrainingProgramsListComponent } from "src/app/components/training-programs-list/training-programs-list.component";
import { PlansService } from 'src/app/services/plans';
import { firstValueFrom } from 'rxjs';
import { PlanObject } from 'src/app/types/plan';
import { DynamicContentComponent } from "src/app/components/dynamic-content/dynamic-content.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonImg, IonIcon, OnlinePersonalTrainerListComponent, TrainingProgramsListComponent, DynamicContentComponent]
})
export class HomePage implements OnInit {
  plansService = inject(PlansService);
  plansLoaded = false;
  currentUser = {
    name: 'Leonardo Santos',
    plan: 'purple',
  }

  planLevel: Map<string, PlanObject> = new Map();

  constructor() {
    addIcons({ body, trophy });
  }

  getPlan(plan: string) {
    if (this.planLevel.get(plan)) {
      return this.planLevel.get(plan);
    }

    return {
      name: 'Plano não encontrado',
      color: ''
    };
  }

  async getPlans() {
    try{
      const data: PlanObject[] = await firstValueFrom(this.plansService.plans)
      data.forEach(plan => {
        this.planLevel.set(plan.color, plan)
      });
      this.plansLoaded = true;
    }catch(e){
      console.error(e);
      this.useLocalPlans()
    }
  }

  useLocalPlans(){
    const planLevels = [
      {
        'name': 'Nível Cinza',
        'color': 'grey'
      },
      {
        'name': 'Nível Azul',
        'color': 'blue'
      },
      {
        'name': 'Nível Ouro',
        'color': 'gold'
      },
      {
        'name': 'Nível Roxo',
        'color': 'purple'
      }
    ];

     planLevels.forEach(plan => {
        this.planLevel.set(plan.color, plan)
      });
      this.plansLoaded = true;
  }

  ngOnInit() {
    this.getPlans();
  }

}
