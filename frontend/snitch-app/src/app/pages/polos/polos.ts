import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-polos',
  imports: [CommonModule, RouterLink],
  templateUrl: './polos.html',
  styleUrl: './polos.scss',
})
export class Polos {
  isFilterOpen = false;
  isSortOpen = false;
  selectedCategory = 'ALL';
  gridView = '2x1';

  categories = [
    'ALL', 'New', 'Classic', 'Striped', 'Solid', 'Pique', 'Slim Fit', 'Regular Fit', 
    'White', 'Black', 'Navy', 'Contrast Collar'
  ];

  products = [
    {
      id: 1,
      name: 'Classic Pique Polo',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
      colors: ['#FFFFFF', '#000000', '#1E3A8A'],
      moreColors: 4
    },
    {
      id: 2,
      name: 'Striped Polo Shirt',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#EF4444', '#10B981']
    },
    {
      id: 3,
      name: 'Navy Blue Polo',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#3B82F6']
    },
    {
      id: 4,
      name: 'White Collar Polo',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500&h=600&fit=crop',
      colors: ['#FFFFFF', '#F3F4F6'],
      moreColors: 2
    },
    {
      id: 5,
      name: 'Contrast Trim Polo',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop',
      colors: ['#000000', '#EF4444', '#FFFFFF']
    },
    {
      id: 6,
      name: 'Premium Cotton Polo',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=600&fit=crop',
      colors: ['#10B981', '#1E3A8A', '#EF4444'],
      moreColors: 5
    },
    {
      id: 7,
      name: 'Slim Fit Polo Tee',
      price: 1249,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
      colors: ['#000000', '#FFFFFF']
    },
    {
      id: 8,
      name: 'Performance Polo Shirt',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&h=600&fit=crop',
      colors: ['#1E3A8A', '#6B7280', '#10B981'],
      moreColors: 3
    },
    {
      id: 9,
      name: 'Two-Tone Collar Polo',
      price: 1349,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop',
      colors: ['#FFFFFF', '#1E3A8A', '#EF4444']
    },
    {
      id: 10,
      name: 'Textured Polo Shirt',
      price: 1449,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop',
      colors: ['#6B7280', '#374151', '#1E3A8A']
    },
    {
      id: 11,
      name: 'Long Sleeve Polo',
      price: 1549,
      image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500&h=600&fit=crop',
      colors: ['#000000', '#1E3A8A', '#FFFFFF'],
      moreColors: 2
    },
    {
      id: 12,
      name: 'Classic Fit Polo',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=600&fit=crop',
      colors: ['#EF4444', '#10B981', '#FBBF24'],
      moreColors: 4
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
