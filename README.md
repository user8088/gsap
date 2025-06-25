# 🚀 Award-Winning Developer Portfolio

A cutting-edge, interactive developer portfolio built with GSAP animations, featuring 7 dynamic sections, custom cursor effects, and mobile-responsive design.

## ✨ Features

### 🎨 Interactive Animations
- **Custom Cursor**: Dynamic cursor with hover effects and blend modes
- **Scroll-Triggered Animations**: Smooth animations triggered by scroll position using GSAP ScrollTrigger
- **Page Loader**: Beautiful animated loading sequence
- **Typing Effects**: Code typing animation in hero section
- **Parallax Effects**: Background elements move at different speeds
- **Hover Interactions**: Cards, buttons, and links with smooth hover animations

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Mobile navigation with animated hamburger menu
- **Adaptive Animations**: Reduced motion for accessibility preferences
- **Performance Optimized**: Throttled scroll events and efficient animations

### 🎯 Seven Dynamic Sections

1. **Hero Section**
   - Animated title with staggered text reveals
   - Live code typing effect
   - Floating geometric shapes
   - Interactive buttons with ripple effects

2. **About Section**
   - Animated statistics counters
   - Profile card with social links
   - Smooth text reveals
   - Personal story presentation

3. **Skills Section**
   - Animated skill bars with percentage indicators
   - Categorized skill sets (Frontend, Backend, Tools)
   - Interactive hover effects
   - Dynamic progress animations

4. **Experience Section**
   - Interactive timeline with alternating layout
   - Company details with tech stack tags
   - Scroll-triggered reveals
   - Professional journey visualization

5. **Projects Section**
   - Project cards with hover overlays
   - Technology tags and project links
   - 3D transform effects
   - Portfolio showcase

6. **Services Section**
   - Service cards with animated icons
   - Feature lists with checkmarks
   - Hover animations and effects
   - Professional service descriptions

7. **Contact Section**
   - Interactive contact form
   - Floating label animations
   - Contact information display
   - Form submission animations

## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Modern JavaScript with classes and modules
- **GSAP 3.12.2**: Professional animation library
  - ScrollTrigger plugin for scroll-based animations
  - TextPlugin for typing effects

### Animation Features
- **ScrollTrigger**: Scroll-based animation system
- **Custom Easing**: Advanced easing functions for smooth animations
- **Performance Optimization**: GPU-accelerated animations with force3D
- **Accessibility**: Respects user's motion preferences

### Design System
- **Typography**: Inter font family with JetBrains Mono for code
- **Color Palette**: Modern gradient-based color scheme
- **Spacing**: Consistent spacing system
- **Components**: Reusable UI components

## 🚀 Quick Start

1. **Clone or download** the portfolio files
2. **Open `index.html`** in your browser
3. **That's it!** No build process required

### Local Development
```bash
# If you want to serve locally (optional)
python -m http.server 8000
# or
npx serve .
```

## 📂 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── style.css           # Complete CSS styling
├── script.js           # GSAP animations and interactions
└── README.md           # This file
```

## 🎨 Customization Guide

### Personal Information
Edit these sections in `index.html`:
- Hero title and subtitle
- About section content
- Skills and percentages
- Experience timeline
- Project details
- Contact information

### Colors and Styling
Modify CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #ff6b6b;      /* Main accent color */
  --secondary-color: #4ecdc4;    /* Secondary accent */
  --bg-color: #0a0a0a;           /* Background color */
  --text-color: #ffffff;         /* Text color */
}
```

### Animation Timing
Adjust animation durations in `script.js`:
```javascript
// Example: Change hero animation timing
gsap.to(titleLines, {
    duration: 1.2,  // Modify this value
    stagger: 0.2,   // And this for stagger timing
    // ...
});
```

## 🔧 Advanced Features

### Custom Cursor
- Follows mouse movement with smooth easing
- Changes on hover interactions
- Disabled on mobile devices for performance
- Blend mode effects for visual appeal

### Performance Optimizations
- GPU-accelerated animations
- Throttled scroll events
- Efficient DOM manipulation
- Lazy animation initialization

### Accessibility Features
- Respects `prefers-reduced-motion`
- Keyboard navigation support
- Semantic HTML structure
- ARIA labels where needed

## 📱 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **IE Support**: Not supported (uses modern CSS and JS features)

## 🎯 Performance Tips

1. **Optimize Images**: Add your own optimized images
2. **CDN Loading**: GSAP loads from CDN for better caching
3. **Minimize Reflows**: Animations use transforms instead of layout properties
4. **Mobile Optimization**: Reduced animations on smaller screens

## 🎨 Design Inspiration

This portfolio draws inspiration from:
- **Stas Bondar's Portfolio**: Advanced GSAP techniques and smooth animations
- **Modern Web Design**: Current trends in developer portfolios
- **Interactive Experiences**: Award-winning interactive websites
- **Performance Best Practices**: Optimized for real-world usage

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest new features
- Submit improvements
- Share your customizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **GSAP Team**: For the amazing animation library
- **Web Design Community**: For inspiration and best practices
- **Open Source Contributors**: For tools and resources used

---

**Built with ❤️ using GSAP and modern web technologies**

Ready to impress? Open `index.html` and watch the magic happen! ✨ 