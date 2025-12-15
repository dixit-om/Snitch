import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel';
import { FeaturedCategoriesComponent } from '../../components/featured-categories/featured-categories';
import { ShopYourSizeComponent } from '../../components/shop-your-size/shop-your-size';
import { NewAndPopularComponent } from '../../components/new-and-popular/new-and-popular';

@Component({
  selector: 'app-home',
  imports: [Header, BannerCarouselComponent, FeaturedCategoriesComponent, ShopYourSizeComponent, NewAndPopularComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
