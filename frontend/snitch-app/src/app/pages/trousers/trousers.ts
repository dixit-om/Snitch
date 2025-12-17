import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trousers',
  imports: [CommonModule, RouterLink],
  templateUrl: './trousers.html',
  styleUrl: './trousers.scss',
})
export class Trousers {
  isFilterOpen = false;
  isSortOpen = false;
  selectedCategory = 'ALL';
  gridView = '2x1';

  categories = [
    'ALL', 'New', 'Formal', 'Casual', 'Chinos', 'Cargo', 'Slim Fit', 'Regular Fit', 
    'Black', 'Navy', 'Beige', 'Grey', 'Khaki'
  ];

  products = [
    {
      id: 1,
      name: 'Formal Black Trousers',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
      colors: ['#000000', '#1F2937']
    },
    {
      id: 2,
      name: 'Navy Blue Chinos',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#3B82F6', '#60A5FA'],
      moreColors: 2
    },
    {
      id: 3,
      name: 'Beige Casual Pants',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop',
      colors: ['#F5F5DC', '#D2B48C']
    },
    {
      id: 4,
      name: 'Grey Formal Pants',
      price: 2099,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
      colors: ['#6B7280', '#4B5563', '#374151']
    },
    {
      id: 5,
      name: 'Khaki Cargo Pants',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&h=600&fit=crop',
      colors: ['#92764D', '#7C6C59'],
      moreColors: 1
    },
    {
      id: 6,
      name: 'Olive Green Chinos',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1548126032-079d3f886525?w=500&h=600&fit=crop',
      colors: ['#556B2F', '#4C6B34']
    },
    {
      id: 7,
      name: 'Slim Fit Dress Pants',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
      colors: ['#000000', '#1F2937', '#4B5563']
    },
    {
      id: 8,
      name: 'Stretch Cotton Chinos',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop',
      colors: ['#F5F5DC', '#D2B48C', '#92764D'],
      moreColors: 3
    },
    {
      id: 9,
      name: 'Business Formal Trousers',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop',
      colors: ['#000000', '#4B5563']
    },
    {
      id: 10,
      name: 'Relaxed Fit Cargo',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
      colors: ['#92764D', '#556B2F', '#000000']
    },
    {
      id: 11,
      name: 'Tapered Ankle Pants',
      price: 2099,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#000000'],
      moreColors: 2
    },
    {
      id: 12,
      name: 'Classic Flat Front Pants',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&h=600&fit=crop',
      colors: ['#4B5563', '#000000', '#D2B48C']
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
