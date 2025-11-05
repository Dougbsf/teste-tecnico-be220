import { inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { PlanObject } from '../types/plan';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  private firestore = inject(Firestore);
  private itemCollection = collection(this.firestore, 'plans');

  get plans(): Observable<PlanObject[]> {
    return collectionData(this.itemCollection, { idField: 'id' }) as Observable<PlanObject[]>;
  }
}
