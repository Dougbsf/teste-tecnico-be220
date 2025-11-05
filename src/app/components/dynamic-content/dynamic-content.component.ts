import { Component, inject, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { BlogPostsService } from 'src/app/services/blog-posts';
import { ISlide } from 'src/app/shared/slider/interfaces/slideInterface';
import { SliderComponent } from "src/app/shared/slider/slider.component";
import { Utils } from 'src/app/shared/utils';
import { BlogPostObject } from 'src/app/types/blog-posts';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss'],
  imports: [SliderComponent],
})
export class DynamicContentComponent {

  private utils = inject(Utils);
  private blogPostsService = inject(BlogPostsService);

  slideList: ISlide[] = []

  sliderTitle = 'CONTEÚDOS';

  async ngOnInit() {
    this.loadPersonalItems();
  }

  async loadPersonalItems() {
    const itemsList = await firstValueFrom(this.blogPostsService.blogPosts);
    this.setUpSlides(itemsList);
    //Chamando de novo para dar mais volume
    this.setUpSlides(itemsList);
  }

  setUpSlides(itemsList: BlogPostObject[]) {
    itemsList.forEach(item => {
      this.slideList.push({
        slideImgPath: item.photo_url,
        slideLabel: item.title,
        action: () => { }
      })
    });
  }
}
