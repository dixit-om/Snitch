import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMobileMenuOpen = false;
  isSearchOpen = false;
  expandedCategory: string | null = null;

  menuCategories = [
    {
      name: 'New Arrivals',
      route: '/new-arrivals',
      products: [
        { image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop', name: 'Premium Shirt' },
        { image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=250&fit=crop', name: 'Denim Jacket' },
        { image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop', name: 'Chinos' },
        { image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=200&h=250&fit=crop', name: 'Polo Shirt' },
        { image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop', name: 'Crew Tee' },
        { image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=250&fit=crop', name: 'Hoodie' }
      ]
    },
    {
      name: 'Shirts',
      route: '/shirts',
      products: [
        { image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=250&fit=crop', name: 'Oxford Shirt' },
        { image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop', name: 'Linen Shirt' },
        { image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=200&h=250&fit=crop', name: 'Formal White' },
        { image: 'https://images.unsplash.com/photo-1598032895397-619ffc42a945?w=200&h=250&fit=crop', name: 'Check Shirt' },
        { image: 'https://images.unsplash.com/photo-1594938328870-f3f5826d00ca?w=200&h=250&fit=crop', name: 'Denim Shirt' },
        { image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=200&h=250&fit=crop', name: 'Striped' }
      ]
    },
    {
      name: 'Jeans',
      route: '/jeans',
      products: [
        { image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop', name: 'Slim Fit Blue' },
        { image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=200&h=250&fit=crop', name: 'Black Skinny' },
        { image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=200&h=250&fit=crop', name: 'Distressed' },
        { image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=200&h=250&fit=crop', name: 'Straight Fit' },
        { image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&h=250&fit=crop', name: 'Light Wash' },
        { image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=200&h=250&fit=crop', name: 'Dark Blue' }
      ]
    },
    {
      name: 'Trousers',
      route: '/trousers',
      products: [
        { image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop', name: 'Formal Black' },
        { image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&h=250&fit=crop', name: 'Navy Chinos' },
        { image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=200&h=250&fit=crop', name: 'Beige Casual' },
        { image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop', name: 'Grey Formal' },
        { image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=200&h=250&fit=crop', name: 'Khaki Cargo' },
        { image: 'https://images.unsplash.com/photo-1548126032-079d3f886525?w=200&h=250&fit=crop', name: 'Olive Chinos' }
      ]
    },
    {
      name: 'Polos',
      route: '/polos',
      products: [
        { image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=200&h=250&fit=crop', name: 'Classic Pique' },
        { image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=250&fit=crop', name: 'Striped Polo' },
        { image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=200&h=250&fit=crop', name: 'Navy Polo' },
        { image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=200&h=250&fit=crop', name: 'White Collar' },
        { image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop', name: 'Contrast Trim' },
        { image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=200&h=250&fit=crop', name: 'Premium Cotton' }
      ]
    }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.expandedCategory = null;
    }
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleCategory(categoryName: string): void {
    this.expandedCategory = this.expandedCategory === categoryName ? null : categoryName;
  }

  isExpanded(categoryName: string): boolean {
    return this.expandedCategory === categoryName;
  }
}
