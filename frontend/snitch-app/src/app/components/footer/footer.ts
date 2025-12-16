import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  emailSubscription = '';

  socialLinks = [
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' }
  ];

  quickLinks = [
    { name: 'New Arrivals', url: '#' },
    { name: 'Best Sellers', url: '#' },
    { name: 'Shirts', url: '#' },
    { name: 'Trousers', url: '#' },
    { name: 'Jeans', url: '#' },
    { name: 'Accessories', url: '#' }
  ];

  customerService = [
    { name: 'Contact Us', url: '#' },
    { name: 'Track Order', url: '#' },
    { name: 'Returns & Exchanges', url: '#' },
    { name: 'Shipping Info', url: '#' },
    { name: 'Size Guide', url: '#' },
    { name: 'FAQs', url: '#' }
  ];

  aboutLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Store Locator', url: '#' }
  ];

  paymentMethods = ['visa', 'mastercard', 'amex', 'paypal', 'upi', 'cod'];

  subscribeNewsletter(): void {
    if (this.emailSubscription && this.isValidEmail(this.emailSubscription)) {
      console.log('Subscribed:', this.emailSubscription);
      // TODO: Implement newsletter subscription logic
      alert('Thank you for subscribing!');
      this.emailSubscription = '';
    } else {
      alert('Please enter a valid email address');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

