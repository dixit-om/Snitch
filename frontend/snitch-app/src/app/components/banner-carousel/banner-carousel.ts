import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

export interface BannerSlide {
  imageUrl: string;
  alt: string;
  link?: string;
}

@Component({
  selector: 'app-banner-carousel',
  imports: [CommonModule],
  templateUrl: './banner-carousel.html',
  styleUrls: ['./banner-carousel.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  // Track image loading states
  imageLoadedStates: { [key: string]: boolean } = {};

  bannerSlides: BannerSlide[] = [
    {
      imageUrl:
        'https://d2d5n4ft74bagm.cloudfront.net/media/banners/43a89432-c632-421b-ab08-099869b84fce/1765536762.jpeg?w=540',
      alt: 'Banner 1',
    },
    {
      imageUrl:
        'https://d2d5n4ft74bagm.cloudfront.net/media/banners/82e7eae2-d230-4c96-a0c1-2f2571a7b39d/1763450575.jpeg?w=540',
      alt: 'Banner 2',
    },
    {
      imageUrl:
        'https://d2d5n4ft74bagm.cloudfront.net/media/banners/08b2b979-41bf-470f-bfd9-a1b727705031/1765536303.jpeg?w=540',
      alt: 'Banner 3',
    },
    {
      imageUrl:
        'https://d2d5n4ft74bagm.cloudfront.net/media/banners/c8a56676-4deb-4b3d-8e6e-f3006f48de3a/1765274880.jpeg?w=540',
      alt: 'Banner 4',
    },
    {
      imageUrl:
        'https://d2d5n4ft74bagm.cloudfront.net/media/banners/42051191-d612-4092-b651-27bf6619c53d/1759329752.jpeg?w=540',
      alt: 'Banner 5',
    },
  ];

  swiperConfig = {
    slidesPerView: 1.2,
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 5000,
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
    },
  };

  ngOnInit() {
    // Initialize all images as not loaded
    this.bannerSlides.forEach(slide => {
      this.imageLoadedStates[slide.imageUrl] = false;
    });
  }

  ngAfterViewInit() {
    // Configure Swiper with breakpoints after view initialization
    const swiperEl = this.swiperContainer.nativeElement;
    
    Object.assign(swiperEl, {
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
      },
    });
    
    swiperEl.initialize();
  }

  onImageLoad(imageUrl: string) {
    this.imageLoadedStates[imageUrl] = true;
  }

  onSlideClick(slide: BannerSlide) {
    if (slide.link) {
      window.location.href = slide.link;
    }
  }
}

