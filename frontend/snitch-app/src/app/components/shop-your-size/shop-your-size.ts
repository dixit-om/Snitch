import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-your-size',
  imports: [],
  templateUrl: './shop-your-size.html',
  styleUrl: './shop-your-size.scss',
})
export class ShopYourSizeComponent {
  bannerImageUrl = 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/refresh_18_nov_PLP02.jpg?v=1763468105';
  imageLoaded = false;

  onBannerClick(): void {
    console.log('Shop Your Size banner clicked');
    // TODO: Navigate to size selection page
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }
}

