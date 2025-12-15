import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel';

@Component({
  selector: 'app-home',
  imports: [Header, BannerCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
