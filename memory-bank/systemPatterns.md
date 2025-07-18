# System Patterns: Developer Portfolio

## Architecture Overview

The portfolio follows a modern Next.js architecture with static generation and dynamic imports for optimal performance.

```
├── pages/                 # Next.js pages (routing)
├── components/           # Reusable UI components
├── containers/          # Section-specific containers
├── public/             # Static assets
├── styles/            # CSS stylesheets
└── portfolio.js      # Configuration data
```

## Key Technical Decisions

### Framework Choice: Next.js

- **Static Site Generation (SSG)**: Pre-renders pages at build time for optimal performance
- **Dynamic Imports**: Code splitting for faster initial load times
- **Image Optimization**: Built-in Next.js image optimization
- **SEO Benefits**: Server-side rendering capabilities for better search engine indexing

### Data Management Pattern

- **Configuration-Driven**: All content managed through `portfolio.js` configuration file
- **Static Data**: No database required, all data is compile-time static
- **GitHub API Integration**: Dynamic fetching of GitHub profile data at build time

### Component Architecture

- **Container/Component Pattern**: Clear separation between data containers and UI components
- **Dynamic Loading**: All major sections loaded dynamically to improve initial page load
- **Prop-based Configuration**: Components receive data through props from portfolio.js

## Design Patterns in Use

### 1. Configuration Pattern

```javascript
// portfolio.js - Single source of truth for all content
export const greetings = {
  /* ... */
};
export const skillsSection = {
  /* ... */
};
export const experience = [
  /* ... */
];
```

### 2. Dynamic Import Pattern

```javascript
// pages/index.js - Code splitting for performance
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
```

### 3. Static Props Pattern

```javascript
// Build-time data fetching
export async function getStaticProps() {
  const githubProfileData = await fetch(/* GitHub API */);
  return { props: { githubProfileData } };
}
```

### 4. Component Composition Pattern

- **Atomic Design**: Small, reusable components composed into larger sections
- **Props Interface**: Consistent prop patterns across components
- **Separation of Concerns**: UI components separate from data logic

## Component Relationships

### Page Level

- `pages/index.js` - Main entry point, orchestrates all sections
- `pages/_app.js` - Global app configuration and styling

### Container Level (Business Logic)

- `containers/Greetings.jsx` - Hero section with personal introduction
- `containers/Skills.jsx` - Technical skills display
- `containers/Experience.jsx` - Work history timeline
- `containers/Education.jsx` - Academic background
- `containers/Projects.jsx` - Portfolio projects showcase
- `containers/Feedbacks.jsx` - Client testimonials

### Component Level (UI)

- `components/Navigation.jsx` - Site navigation
- `components/SEO.jsx` - Meta tags and SEO optimization
- `components/GithubProfileCard.jsx` - GitHub integration
- `components/DisplayLottie.jsx` - Animation wrapper
- `components/*Card.jsx` - Various card components for data display

## Performance Patterns

### Loading Strategy

1. **Critical Path**: Navigation and hero section load first
2. **Progressive Enhancement**: Additional sections load dynamically
3. **Image Optimization**: Next.js automatic image optimization
4. **Font Loading**: Custom font loading with fallbacks

### Caching Strategy

- **Static Generation**: Pages pre-built at compile time
- **CDN Friendly**: All assets optimized for CDN delivery
- **Browser Caching**: Proper cache headers for static assets

## Styling Architecture

### CSS Organization

- `styles/argon-design-system-react.css` - Bootstrap-based design system
- `styles/styles.css` - Custom overrides and additional styles
- **Component-Scoped**: Styles organized by component responsibility

### Responsive Design Pattern

- **Mobile-First**: Base styles for mobile, enhanced for larger screens
- **Bootstrap Grid**: Consistent grid system across all components
- **Flexible Typography**: Responsive font sizing and spacing

## Data Flow Patterns

### Configuration → Component Flow

```
portfolio.js → Container Component → UI Component → Rendered Output
```

### External Data Integration

```
GitHub API → getStaticProps → Component Props → UI Rendering
```

## Error Handling Patterns

### Graceful Degradation

- **Missing Data**: Components handle missing configuration gracefully
- **API Failures**: GitHub integration has fallback behavior
- **Image Loading**: Proper alt text and loading states

### Development vs Production

- **Environment Awareness**: Different behaviors for development and production
- **Error Boundaries**: React error boundaries for component isolation
