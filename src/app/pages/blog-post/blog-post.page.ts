import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonIcon, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { BlogPostObject } from 'src/app/types/blog-posts';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.page.html',
  styleUrls: ['./blog-post.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon, IonImg]
})
export class BlogPostPage implements OnInit {
  private router = inject(Router);
  private location = inject(Location);
  
  post = signal<BlogPostObject | null>(null);

  constructor() {
    addIcons({ arrowBack });
  }

  ngOnInit() {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras.state) {
      this.post.set(navigation.extras.state as BlogPostObject);
    }
  }

  goBack() {
    this.location.back();
  }
}
