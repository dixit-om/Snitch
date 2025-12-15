import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel';
import { FeaturedCategoriesComponent } from '../../components/featured-categories/featured-categories';

@Component({
  selector: 'app-home',
  imports: [Header, BannerCarouselComponent, FeaturedCategoriesComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
