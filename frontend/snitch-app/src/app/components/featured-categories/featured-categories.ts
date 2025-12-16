import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FeaturedCategory {
  id: string;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-featured-categories',
  imports: [CommonModule],
  templateUrl: './featured-categories.html',
  styleUrl: './featured-categories.scss',
})
export class FeaturedCategoriesComponent {
  // Track image loading states
  imageLoadedStates: { [key: string]: boolean } = {};
  
  featuredCategories: FeaturedCategory[] = [
    {
      id: '1',
      name: '',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/d39f8013-4dae-4c1a-afe2-0b8b715287e0/1765351150.jpeg?w=90'
    },
    {
      id: '2',
      name: 'SHIRTS',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/ac7c50e8-ba8c-454f-a996-a6a2e552234d/1763450387.jpeg?w=90'
    },
    {
      id: '3',
      name: 'TROUSERS',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/4c91b6ae-4117-4aac-a97b-78ef219325ee/1763450401.jpeg?w=90'
    },
    {
      id: '4',
      name: 'JEANS',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/59d59218-a414-4995-94c8-4aa61aae9ae0/1763450410.jpeg?w=90'
    },
    {
      id: '5',
      name: '',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/05ff84a0-75e0-429b-8844-b20adf643238/1763450419.jpeg?w=90'
    },
    {
      id: '6',
      name: 'POLOS',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/aebdc03f-f280-4cf9-8a80-12a648b2025a/1765274468.jpeg?w=90'
    },
    {
      id: '7',
      name: 'WINTERWEAR',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/53ece380-0abd-475a-a657-3ac6e6516612/1763450457.jpeg?w=90'
    },
    {
      id: '8',
      name: 'HOLIDAY FITS',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/5c73744e-195f-4684-9608-578cd363d2bc/1765200722.jpeg?w=90'
    },
    {
      id: '9',
      name: 'ESSENTIALS',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/b83959e3-074a-409f-a033-e56e2781ab73/1763450441.jpeg?w=90'
    },
    {
      id: '10',
      name: 'FOOTWEAR',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/447b0673-8e29-426f-a436-1ccebd355f09/1763453762.jpeg?w=90'
    },
    {
      id: '11',
      name: 'PLUS SIZE',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/9d62e211-00c9-4b34-9180-28365f3454be/1763450469.jpeg?w=90'
    },
    {
      id: '12',
      name: '',
      imageUrl: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/82ef231a-2c8d-4b47-a596-a5fcd452750b/1763450493.jpeg?w=90'
    }
  ];

  onCategoryClick(category: FeaturedCategory): void {
    console.log('Category clicked:', category);
    // TODO: Navigate to category page
  }

  onImageLoad(imageUrl: string): void {
    this.imageLoadedStates[imageUrl] = true;
  }
}

