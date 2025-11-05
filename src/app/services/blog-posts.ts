import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  private firestore = inject(Firestore);
  private itemCollection = collection(this.firestore, 'blog_posts');
  private q = query(this.itemCollection, orderBy('order'));

  get blogPosts(): Observable<any[]> {
    return collectionData(this.q, { idField: 'id' }) as Observable<any[]>;
  }
}
