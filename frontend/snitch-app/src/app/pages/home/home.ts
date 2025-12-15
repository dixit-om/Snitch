import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel';
import { FeaturedCategoriesComponent } from '../../components/featured-categories/featured-categories';
import { ShopYourSizeComponent } from '../../components/shop-your-size/shop-your-size';

@Component({
  selector: 'app-home',
  imports: [Header, BannerCarouselComponent, FeaturedCategoriesComponent, ShopYourSizeComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
