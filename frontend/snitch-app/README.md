# Snitch Clothing Brand - Frontend

This is the Angular frontend for the Snitch clothing brand website clone.

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable components (Header, Footer, etc.)
│   ├── pages/          # Page components (Home, Products, etc.)
│   ├── services/       # Angular services
│   └── models/         # TypeScript interfaces and models
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm start
```

3. Open browser to `http://localhost:4200`

## Technologies Used

- **Angular 18+** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Programming language
- **SCSS** - CSS preprocessor

## Project Standards

### Component Organization
- **Reusable components** → `src/app/components/`
- **Page components** → `src/app/pages/`
- All components use standalone architecture
- TypeScript strict mode enabled

### Styling Guidelines
- Use Tailwind utility classes for styling
- Custom styles in component SCSS files when needed
- Responsive design: mobile-first approach
- Follow the original Snitch brand design patterns

### Code Quality
- Use meaningful variable and function names
- Keep components focused and single-purpose
- Use TypeScript types for all data structures
- Follow Angular style guide

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Lint the code

## Features Implemented

✅ Professional header component with:
- Hamburger menu (mobile navigation)
- Brand logo centered
- Search functionality
- Profile and shopping bag icons
- Responsive design

## Coming Soon

- Product listing components
- Product detail pages
- Shopping cart functionality
- User authentication
- Checkout process
