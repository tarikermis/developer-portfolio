# Tech Context: Developer Portfolio

## Current Technology Stack

### Core Framework

- **Next.js 14.1.0**: React framework with SSG/SSR capabilities
- **React 18.2.0**: UI library for component-based architecture
- **React DOM 18.2.0**: React rendering for web

### UI & Styling

- **Bootstrap 5.0.2**: CSS framework for responsive design
- **Reactstrap 9.2.2**: Bootstrap components for React
- **Custom CSS**: Additional styling in styles/ directory

### Animations & Interactions

- **React Lottie 1.2.3**: Lottie animation integration
- **React Reveal 1.2.2**: Scroll-based animations
- **React Headroom 3.1.1**: Smart navigation header
- **Headroom.js 0.12.0**: Header behavior library

### Data & API Integration

- **Apollo Client 3.3.21**: GraphQL client (currently unused)
- **GraphQL 16.8.1**: Query language for APIs
- **GitHub API**: Dynamic profile data fetching

### Development Tools

- **ESLint 8.56.0**: Code linting and quality
- **Next ESLint Config 14.1.0**: Next.js specific linting rules
- **Sharp 0.33.2**: Image optimization

### Utilities

- **Moment.js 2.29.1**: Date manipulation (legacy, should migrate to date-fns)
- **Color Thief React 2.1.0**: Color extraction from images
- **React Easy Emoji 1.5.0**: Emoji rendering
- **React Typist 2.0.5**: Typing animation effects
- **Classnames 2.3.1**: Conditional CSS classes
- **Prop Types 15.7.2**: Runtime type checking

## Development Setup

### Package Manager

- **Yarn**: Primary package manager (yarn.lock present)
- **NPM Scripts**: Standard Next.js development scripts

### Build Process

```bash
yarn dev    # Development server
yarn build  # Production build
yarn start  # Production server
yarn lint   # Code linting
```

### Environment Configuration

- **Next.js Config**: Custom configuration in next.config.js
- **ESLint Config**: Linting rules in .eslintrc.json
- **Git Ignore**: Standard Next.js gitignore patterns

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

- React Reveal - Scroll animations
- React Headroom - Navigation behavior
- React Typist - Text animations
- Color Thief - Dynamic theming

### Development Dependencies

- ESLint - Code quality
- Sharp - Image optimization

### Legacy/Outdated Dependencies

- **Moment.js**: Should migrate to date-fns or native Date
- **React Scripts**: Not needed for Next.js project
- **Apollo Client/GraphQL**: Currently unused, can be removed

## Current Issues & Technical Debt

### Dependency Updates Needed

- Bootstrap 5.0.2 → 5.3.x (latest stable)
- React Reveal 1.2.2 → Consider Framer Motion migration
- Moment.js → date-fns migration
- Remove unused Apollo Client/GraphQL dependencies

### Configuration Issues

- React Strict Mode disabled (should be enabled)
- Missing TypeScript configuration
- No automated testing setup

### Performance Optimizations Needed

- Image optimization audit
- Bundle size analysis
- Unused dependency removal
- Code splitting optimization

## Recommended Technology Updates

### Immediate Updates (Low Risk)

1. **Bootstrap 5.0.2 → 5.3.2**: Bug fixes and improvements
2. **Next.js 14.1.0 → 14.2.x**: Latest stable with security updates
3. **React 18.2.0 → 18.3.x**: Latest stable version

### Medium Priority Updates

1. **Remove Apollo Client/GraphQL**: Unused dependencies
2. **Moment.js → date-fns**: Smaller bundle size
3. **Add TypeScript**: Better development experience
4. **Enable React Strict Mode**: Better error detection

### Long-term Considerations

1. **React Reveal → Framer Motion**: More modern animation library
2. **Custom CSS → Tailwind CSS**: More maintainable styling
3. **Add Testing Framework**: Jest + React Testing Library
4. **Add Storybook**: Component documentation

## Development Environment

### Required Tools

- Node.js 18+ (LTS recommended)
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
