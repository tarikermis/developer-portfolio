# Tech Context: Developer Portfolio

## Current Technology Stack

### Core Framework

- **Next.js 15.4.1**: React framework with SSG/SSR capabilities
- **React 19.1.0**: UI library for component-based architecture
- **React DOM 19.1.0**: React rendering for web

### UI & Styling

- **Bootstrap 5.3.3**: CSS framework for responsive design
- **Reactstrap 9.2.3**: Bootstrap components for React
- **Custom CSS**: Additional styling in styles/ directory

### Animations & Interactions

- **React Lottie 1.2.4**: Lottie animation integration
- **Framer Motion**: Modern scroll-based animations (replaced React Reveal)
- **React Headroom 3.2.1**: Smart navigation header
- **Headroom.js 0.12.0**: Header behavior library

### Data & API Integration

- **GitHub API**: Dynamic profile data fetching

### Development Tools

- **ESLint 9.x**: Code linting and quality
- **@next/eslint-plugin-next 15.4.1**: Next.js specific linting rules
- **Sharp 0.33.5**: Image optimization

### Utilities

- **date-fns 4.1.0**: Modern date manipulation (replaced Moment.js)
- **Color Thief 2.4.0**: Color extraction from images
- **React Easy Emoji 1.8.1**: Emoji rendering
- **React Typist 2.0.5**: Typing animation effects
- **Classnames 2.5.1**: Conditional CSS classes
- **Prop Types 15.8.1**: Runtime type checking
- **@iconify/react 5.2.0**: Icon components
- **React Datetime 3.2.0**: Date/time picker component

## Development Setup

### Package Manager

- **Yarn**: Primary package manager (yarn.lock present)
- **NPM Scripts**: Standard Next.js development scripts

### Node.js Requirements

- **Minimum Version**: Node.js >=18.17.0 (specified in package.json engines)
- **Recommended**: Node.js 20.x LTS (specified in .nvmrc)

### Build Process

```bash
yarn dev    # Development server
yarn build  # Production build
yarn start  # Production server
yarn lint   # Code linting
```

### Environment Configuration

- **Next.js Config**: Custom configuration in next.config.js
  - Uses `remotePatterns` for image optimization (updated from deprecated `domains`)
  - Security headers configured
- **ESLint Config**: Linting rules in .eslintrc.json
- **Git Ignore**: Standard Next.js gitignore patterns
- **.nvmrc**: Specifies Node.js 20.x for consistent development environment

## Technical Constraints

### Performance Requirements

- **Bundle Size**: Optimized with dynamic imports
- **Loading Speed**: Target < 3 seconds first contentful paint
- **SEO Score**: Target 90%+ on Lighthouse
- **Mobile Performance**: Responsive design mandatory

### Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Accessibility**: WCAG 2.1 AA compliance target

### Deployment Constraints

- **Static Export**: Must support static site generation
- **CDN Friendly**: All assets optimized for CDN delivery
- **Vercel/Netlify**: Deployment platform compatibility

## Dependencies Analysis

### Critical Dependencies (Core Functionality)

- Next.js, React, React DOM - Core framework
- Bootstrap, Reactstrap - UI framework
- React Lottie - Animations

### Enhancement Dependencies (User Experience)

- Framer Motion - Scroll animations (modern replacement for React Reveal)
- React Headroom - Navigation behavior
- React Typist - Text animations
- Color Thief - Dynamic theming

### Development Dependencies

- ESLint - Code quality
- Sharp - Image optimization

### Removed Dependencies (Cleanup Completed)

- ~~Moment.js~~: Replaced with date-fns
- ~~React Scripts~~: Removed (not needed for Next.js)
- ~~Apollo Client/GraphQL~~: Removed (was unused)
- ~~React Reveal~~: Replaced with Framer Motion
- ~~nouislider~~: Removed (was unused)

## Current Issues & Technical Debt

### ✅ Resolved Issues

- ~~Bootstrap 5.0.2 → 5.3.x~~: Updated to 5.3.3
- ~~React Reveal → Framer Motion~~: Migration completed
- ~~Moment.js → date-fns~~: Migration completed
- ~~Remove unused Apollo Client/GraphQL~~: Removed
- ~~Next.js image config deprecation~~: Updated to use `remotePatterns`
- ~~@iconify/react deprecated attribute~~: Removed `data-inline` attribute

### Remaining Configuration Considerations

- React Strict Mode disabled (should be enabled after thorough testing)
- Missing TypeScript configuration (optional enhancement)
- No automated testing setup (future enhancement)

### Performance Status

- Bundle size optimized (unused dependencies removed)
- Code splitting via dynamic imports working
- Image optimization configured with Sharp

## Recommended Future Updates

### Low Priority Enhancements

1. **Add TypeScript**: Better development experience
2. **Enable React Strict Mode**: Better error detection (requires testing)
3. **Add Testing Framework**: Jest + React Testing Library
4. **Add Storybook**: Component documentation

### Long-term Considerations

1. **Custom CSS → Tailwind CSS**: More maintainable styling (optional)
2. **Automated CI/CD**: GitHub Actions for testing and deployment

## Development Environment

### Required Tools

- Node.js 18.17.0+ (20.x LTS recommended, specified in .nvmrc)
- Yarn package manager
- Git for version control
- Modern code editor (VS Code recommended)

### Optional Tools

- Vercel CLI for deployment testing
- Lighthouse for performance auditing
- React Developer Tools browser extension
- Next.js DevTools

## Security Considerations

### Current Security Measures

- Next.js built-in security features
- ESLint security rules
- Dependency vulnerability scanning via npm audit

### Recommended Security Enhancements

- Regular dependency updates
- Content Security Policy (CSP) headers
- Security headers configuration
- Automated security scanning in CI/CD
