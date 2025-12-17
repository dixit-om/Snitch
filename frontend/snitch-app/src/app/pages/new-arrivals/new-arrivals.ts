import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-new-arrivals',
  imports: [CommonModule, RouterLink, Footer],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss',
})
export class NewArrivals {
  isFilterOpen = false;
  isSortOpen = false;
  selectedCategory = 'ALL';
  gridView = '2x1';

  categories = [
    'ALL', 'Shirts', 'Polos', 'Jeans', 'Trousers', 'Winterwear', 'Footwear', 'Accessories'
  ];

  products = [
    {
      id: 1,
      name: 'Premium Cotton Shirt',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
      colors: ['#FFFFFF', '#000000', '#5165DD']
    },
    {
      id: 2,
      name: 'Casual Denim Jacket',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#111827'],
      moreColors: 2
    },
    {
      id: 3,
      name: 'Slim Fit Chinos',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
      colors: ['#92764D', '#000000', '#C9B89A']
    },
    {
      id: 4,
      name: 'Striped Polo T-Shirt',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
      colors: ['#FFFFFF', '#5165DD', '#000000'],
      moreColors: 3
    },
    {
      id: 5,
      name: 'Classic Crew Neck Tee',
      price: 899,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      colors: ['#FFFFFF', '#000000', '#808080']
    },
    {
      id: 6,
      name: 'Urban Hoodie',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
      colors: ['#1F2937', '#6B7280'],
      moreColors: 4
    },
    {
      id: 7,
      name: 'Textured Knit Sweater',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=600&fit=crop',
      colors: ['#92764D', '#1F2937', '#F5F5DC']
    },
    {
      id: 8,
      name: 'Stretch Fit Joggers',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
      colors: ['#000000', '#808080']
    },
    {
      id: 9,
      name: 'Classic V-Neck Cardigan',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop',
      colors: ['#1F2937', '#92764D', '#FFFFFF'],
      moreColors: 2
    },
    {
      id: 10,
      name: 'Relaxed Fit Shorts',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop',
      colors: ['#92764D', '#000000', '#808080']
    },
    {
      id: 11,
      name: 'Bomber Jacket',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1548126032-079d3f886525?w=500&h=600&fit=crop',
      colors: ['#000000', '#1F2937']
    },
    {
      id: 12,
      name: 'Printed Graphic Tee',
      price: 999,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
      colors: ['#FFFFFF', '#000000', '#5165DD'],
      moreColors: 5
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

