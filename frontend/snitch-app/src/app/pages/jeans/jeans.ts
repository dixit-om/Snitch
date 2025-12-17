import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-jeans',
  imports: [CommonModule, RouterLink, Footer],
  templateUrl: './jeans.html',
  styleUrl: './jeans.scss',
})
export class Jeans {
  isFilterOpen = false;
  isSortOpen = false;
  selectedCategory = 'ALL';
  gridView = '2x1';

  categories = [
    'ALL', 'New', 'Slim Fit', 'Skinny', 'Straight Fit', 'Regular Fit', 'Relaxed', 
    'Blue', 'Black', 'Light Wash', 'Dark Wash', 'Distressed'
  ];

  products = [
    {
      id: 1,
      name: 'Slim Fit Blue Jeans',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#000000', '#60A5FA']
    },
    {
      id: 2,
      name: 'Black Skinny Jeans',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&h=600&fit=crop',
      colors: ['#000000', '#1F2937'],
      moreColors: 1
    },
    {
      id: 3,
      name: 'Distressed Denim',
      price: 2699,
      image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&h=600&fit=crop',
      colors: ['#60A5FA', '#DBEAFE']
    },
    {
      id: 4,
      name: 'Classic Straight Fit',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#000000', '#60A5FA'],
      moreColors: 2
    },
    {
      id: 5,
      name: 'Light Wash Jeans',
      price: 2399,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
      colors: ['#DBEAFE', '#60A5FA']
    },
    {
      id: 6,
      name: 'Dark Blue Regular Fit',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#000000'],
      moreColors: 1
    },
    {
      id: 7,
      name: 'Tapered Fit Jeans',
      price: 2599,
      image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#60A5FA']
    },
    {
      id: 8,
      name: 'Comfort Stretch Jeans',
      price: 2799,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
      colors: ['#000000', '#1F2937', '#60A5FA']
    },
    {
      id: 9,
      name: 'Vintage Wash Denim',
      price: 2899,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop',
      colors: ['#60A5FA', '#DBEAFE'],
      moreColors: 3
    },
    {
      id: 10,
      name: 'Ripped Knee Jeans',
      price: 2599,
      image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=600&fit=crop',
      colors: ['#000000', '#1E3A8A']
    },
    {
      id: 11,
      name: 'Mid Rise Slim Jeans',
      price: 2399,
      image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#60A5FA', '#DBEAFE']
    },
    {
      id: 12,
      name: 'Raw Denim Straight Fit',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#000000'],
      moreColors: 2
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

