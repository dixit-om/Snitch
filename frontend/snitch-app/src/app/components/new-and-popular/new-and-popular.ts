import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FilterChip {
  id: string;
  label: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  href: string;
  colors?: { color: string }[];
  additionalColorsCount?: number;
}

@Component({
  selector: 'app-new-and-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-and-popular.html',
  styleUrl: './new-and-popular.scss',
})
export class NewAndPopularComponent {
  selectedFilter: string = 'all';
  
  // Track image loading states
  imageLoadedStates: { [key: string]: boolean } = {};

  filterChips: FilterChip[] = [
    { id: 'all', label: 'All' },
    { id: 'shirts', label: 'Shirts' },
    { id: 'trousers', label: 'Trousers' },
    { id: 't-shirts', label: 'T-Shirts' },
    { id: 'jeans', label: 'Jeans' },
    { id: 'jackets', label: 'Jackets' },
    { id: 'shorts', label: 'Shorts' },
    { id: 'sweatshirts', label: 'Sweatshirts' },
    { id: 'sweaters', label: 'Sweaters' },
    { id: 'shoes', label: 'Shoes' },
  ];

  products: Product[] = [
    {
      id: '1',
      name: 'Light Flannel Slim Fit Checks Shirt',
      price: '₹999',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_85ae4387-4d80-4821-ab86-319fa0b159c5.jpg?v=1764611276&quality=80',
      href: '/men-shirts/slim-fit-checks-shirt-4mss4524-01/8856720113826/buy',
    },
    {
      id: '2',
      name: 'Light Weight Flannel Plaid Slim Fit Shirt',
      price: '₹999',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4523-01_1.jpg?v=1764957902&quality=80',
      href: '/men-shirts/plaid-slim-fit-shirt-4mss4523-01/8860919857314/buy',
    },
    {
      id: '3',
      name: '100% Cotton Plaid Slim Fit Shirt',
      price: '₹1299',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4618-01_1.jpg?v=1765214934&quality=80',
      href: '/men-shirts/100-cotton-plaid-slim-fit-shirt-4mss4618-01/8861864427682/buy',
    },
    {
      id: '4',
      name: 'Snap Button Suede Stretch Jacket',
      price: '₹3099',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msk8779-01_1.jpg?v=1764785495&quality=80',
      href: '/men-jackets/stretch-relaxed-fit-lapel-collar-jacket-4msk8779-01/8858792198306/buy',
      colors: [
        { color: 'rgb(124, 102, 71)' },
        { color: 'rgb(32, 31, 31)' },
        { color: 'rgb(92, 64, 51)' },
      ],
      additionalColorsCount: 1,
    },
    {
      id: '5',
      name: 'Relaxed Fit Washed Jeans',
      price: '₹1999',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_3e09b268-448e-4f22-8a68-0b3264670726.jpg?v=1764611297&quality=80',
      href: '/men-jeans/denim-relaxed-fit-jeans-4msd4171-05/8856720507042/buy',
    },
    {
      id: '6',
      name: 'Stretch Bootcut Jeans',
      price: '₹1899',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msd4168-03_1.jpg?v=1765214892&quality=80',
      href: '/men-jeans/bootcut-fit-stretch-washed-jeans-4msd4168-03/8861863772322/buy',
    },
    {
      id: '7',
      name: 'Pixel Heart Embroidered T-Shirt',
      price: '₹999',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_2f76dae2-5d12-4051-886c-5f15730ee515.jpg?v=1763662181&quality=80',
      href: '/men-t-shirts/embroidered-100-cotton-regular-fit-t-shirt-4mst3127-01/8844910198946/buy',
    },
    {
      id: '8',
      name: 'Regular Fit Chinese Collar Shirt',
      price: '₹1099',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_a2b0ffc6-e25c-4f8e-bbe2-bb325ec47684.jpg?v=1764138868&quality=80',
      href: '/men-shirts/mandarin-collar-regular-fit-shirt-4mss4482-02/8851573112994/buy',
    },
    {
      id: '9',
      name: 'Loose Fit Stretch Trousers',
      price: '₹1699',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msr5502-06_1.jpg?v=1764006490&quality=80',
      href: '/men-trousers/loose-fit-stretch-trousers-4msr5502-06/8851576029346/buy',
      colors: [
        { color: 'rgb(239, 239, 239)' },
        { color: 'rgb(255, 228, 200)' },
        { color: 'rgb(202, 180, 135)' },
      ],
      additionalColorsCount: 2,
    },
    {
      id: '10',
      name: 'Light Weight Flannel Slim Fit Checks Shirt',
      price: '₹999',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4479-02_1.jpg?v=1763578259&quality=80',
      href: '/men-shirts/slim-fit-checks-shirt-4mss4479-02/8843331535010/buy',
      colors: [
        { color: 'rgb(128, 0, 32)' },
        { color: 'rgb(96, 185, 127)' },
        { color: 'rgb(255, 131, 6)' },
      ],
      additionalColorsCount: 3,
    },
    {
      id: '11',
      name: 'Puff Print Embroidered Oversized T Shirt',
      price: '₹1199',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst3186-01_1.jpg?v=1763103614&quality=80',
      href: '/men-t-shirts/100-cotton-graphic-oversized-t-shirt-4mst3186-01/8840018559138/buy',
    },
    {
      id: '12',
      name: 'Zipper Stretch Polo T-Shirt',
      price: '₹1299',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst3069-03_1.jpg?v=1764957933&quality=80',
      href: '/men-t-shirts/zipper-regular-fit-stretch-polo-t-shirt-4mst3069-03/8860920709282/buy',
    },
    {
      id: '13',
      name: '100% Cotton V Neck Regular Fit T-Shirt',
      price: '₹799',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_75c51a80-125b-41e4-b87d-2f4bb2910252.jpg?v=1763662174&quality=80',
      href: '/men-t-shirts/100-cotton-regular-fit-t-shirt-4mst3112-06/8844909904034/buy',
      colors: [
        { color: 'rgb(128, 0, 32)' },
        { color: 'rgb(9, 40, 111)' },
        { color: 'rgb(96, 185, 127)' },
      ],
      additionalColorsCount: 1,
    },
    {
      id: '14',
      name: '100% Cotton V Neck Regular Fit T-Shirt',
      price: '₹799',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst3112-04_1.jpg?v=1763578296&quality=80',
      href: '/men-t-shirts/100-cotton-regular-fit-t-shirt-4mst3112-04/8843332976802/buy',
      colors: [
        { color: 'rgb(32, 31, 31)' },
        { color: 'rgb(128, 0, 32)' },
        { color: 'rgb(9, 40, 111)' },
      ],
      additionalColorsCount: 1,
    },
    {
      id: '15',
      name: '100% Cotton Stripes Mandarin Shirt',
      price: '₹1199',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4572-03_1.jpg?v=1764411097&quality=80',
      href: '/men-shirts/100-cotton-regular-fit-stripes-mandarin-collar-shirt-4mss4572-03/8856059379874/buy',
      colors: [
        { color: 'rgb(81, 101, 221)' },
        { color: 'rgb(219, 120, 137)' },
        { color: 'rgb(9, 40, 111)' },
      ],
    },
  ];

  onFilterClick(filter: FilterChip): void {
    this.selectedFilter = filter.id;
    console.log('Filter clicked:', filter);
    // Implement filtering logic here
  }

  onProductClick(product: Product): void {
    console.log('Product clicked:', product);
    // Implement navigation logic here
  }

  onWishlistClick(product: Product, event: Event): void {
    event.stopPropagation(); // Prevent product click
    console.log('Wishlist clicked:', product);
    // Implement wishlist logic here
  }

  onImageLoad(imageUrl: string): void {
    this.imageLoadedStates[imageUrl] = true;
  }
}

