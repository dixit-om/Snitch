import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shirts',
  imports: [CommonModule, RouterLink],
  templateUrl: './shirts.html',
  styleUrl: './shirts.scss',
})
export class Shirts {
  isFilterOpen = false;
  isSortOpen = false;
  selectedCategory = 'ALL';
  gridView = '2x1'; // 2x1, 1x1, 3x3

  categories = [
    'ALL', 'New', 'Formal', 'Prints', 'Plain', 'Linen', 'White', 'Black', 
    'Relaxed', 'Half Sleeve', 'Checks', 'Stripes', 'Luxe', 'Plus Size', 
    'Slim', 'Crochet', 'Cuban', 'Textured', 'Self Design', 'Core Lab', 
    'Party Wear', 'Occasion Wear', 'Denim'
  ];

  products = [
    {
      id: 1,
      name: 'Double Cuff White Shirt',
      price: 999,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop',
      colors: ['#5C4033', '#666F3E', '#CCCCCC'],
      moreColors: 7
    },
    {
      id: 2,
      name: 'Slim Fit Checks Luxe Shirt',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
      colors: []
    },
    {
      id: 3,
      name: 'Lining Maroon Shirt',
      price: 999,
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=600&fit=crop',
      colors: ['#EFEFEF', '#5165DD', '#201F1F']
    },
    {
      id: 4,
      name: 'Octet Grey Shirt',
      price: 1129,
      image: 'https://images.unsplash.com/photo-1598032895397-619ffc42a945?w=500&h=600&fit=crop',
      colors: ['#666F3E', '#800020', '#EFEFEF'],
      moreColors: 5
    },
    {
      id: 5,
      name: 'Technical Stretch Stitchless Shirt',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1594938328870-f3f5826d00ca?w=500&h=600&fit=crop',
      colors: []
    },
    {
      id: 6,
      name: 'Madrigo Lilac Shirt',
      price: 1219,
      image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&h=600&fit=crop',
      colors: ['#5C4033', '#5165DD', '#201F1F']
    },
    {
      id: 7,
      name: '100% Cotton Slim Fit Luxe Shirt',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&h=600&fit=crop',
      colors: []
    },
    {
      id: 8,
      name: 'Lining Navy Shirt',
      price: 999,
      image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&h=600&fit=crop',
      colors: ['#800020', '#EFEFEF', '#201F1F']
    },
    {
      id: 9,
      name: '100% Cotton Slim Fit Luxe Shirt',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=600&fit=crop',
      colors: []
    },
    {
      id: 10,
      name: 'Double Cuff Sky Blue Shirt',
      price: 999,
      image: 'https://images.unsplash.com/photo-1608234807163-b588a9045b56?w=500&h=600&fit=crop',
      colors: ['#5C4033', '#666F3E', '#CCCCCC'],
      moreColors: 7
    },
    {
      id: 11,
      name: '100% Cotton Slim Fit Luxe Shirt',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1591213373119-d64dc798647c?w=500&h=600&fit=crop',
      colors: []
    },
    {
      id: 12,
      name: 'Aurora Blue Stripe Shirt',
      price: 1129,
      image: 'https://images.unsplash.com/photo-1622519407650-3df9883f76e4?w=500&h=600&fit=crop',
      colors: []
    }
  ];

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  toggleSort() {
    this.isSortOpen = !this.isSortOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  setGridView(view: string) {
    this.gridView = view;
  }
}

