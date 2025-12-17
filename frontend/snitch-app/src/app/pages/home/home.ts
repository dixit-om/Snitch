import { Component } from '@angular/core';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel';
import { FeaturedCategoriesComponent } from '../../components/featured-categories/featured-categories';
import { ShopYourSizeComponent } from '../../components/shop-your-size/shop-your-size';
import { NewAndPopularComponent } from '../../components/new-and-popular/new-and-popular';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [BannerCarouselComponent, FeaturedCategoriesComponent, ShopYourSizeComponent, NewAndPopularComponent, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
