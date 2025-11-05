import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OnlinePersonalObject } from '../types/online-personal';

@Injectable({
  providedIn: 'root',
})
export class TrainingProgramsService {
  private firestore = inject(Firestore);
  private itemCollection = collection(this.firestore, 'online_personal');
  private q = query(this.itemCollection, orderBy('order'));

  get trainingPrograms(): Observable<any[]> {
    return collectionData(this.q, { idField: 'id' }) as Observable<OnlinePersonalObject[]>;
  }
}
