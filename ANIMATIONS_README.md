# Framer Motion Animations for Fiber One Asia

This document outlines all the beautiful animations implemented using Framer Motion throughout the Fiber One Asia website.

## 🎯 Overview

The project now features sophisticated, smooth animations that enhance user experience and create a modern, professional feel. All animations are optimized for performance and accessibility.

## 📁 Components with Animations

### 1. **HeroSection.jsx**

- **Floating title animation**: Subtle up-and-down movement
- **Staggered text entrance**: Title, subtitle, and button appear in sequence
- **Background overlay fade-in**: Smooth overlay animation
- **Interactive button**: Hover effects with glow and scale
- **Responsive animations**: Different behaviors on mobile/desktop

### 2. **Navbar.jsx**

- **Sticky navigation**: Smooth slide-in from top
- **Logo scale animation**: Gentle entrance effect
- **Link hover effects**: Scale, color change, and underline animation
- **Mobile menu**: Smooth slide-down with staggered link animations
- **Menu button**: Rotating icon transitions
- **Mobile link interactions**: Slide and scale effects

### 3. **CardService.jsx**

- **3D card entrance**: Rotation and scale effects
- **Staggered animations**: Cards appear in sequence
- **Interactive hover**: Lift, scale, and shadow effects
- **Icon animations**: Rotation and scale on hover
- **Gradient background**: Subtle color transitions
- **Bottom indicator**: Animated progress bar

### 4. **ServiceSection.jsx**

- **Container animations**: Fade-in with staggered children
- **Grid layout**: Responsive animation timing
- **Viewport triggers**: Animations trigger when scrolled into view

### 5. **CardAbout.jsx**

- **Replaced AOS**: Converted from AOS to Framer Motion
- **Icon animations**: Rotation and scale effects
- **Number animations**: Bounce and scale effects
- **Text reveal**: Staggered text animations
- **Hover interactions**: Lift and shadow effects

### 6. **AboutSection.jsx**

- **Text animations**: Scale and fade effects for headings
- **Staggered content**: Sequential animation timing
- **Card grid**: Coordinated entrance animations

### 7. **Layout.jsx**

- **Page transitions**: Smooth fade and scale effects
- **Container animations**: Staggered children timing
- **Route changes**: AnimatePresence for smooth navigation

## 🆕 New Animation Components

### 8. **ScrollAnimation.jsx** (Reusable Component)

A versatile component for scroll-triggered animations with multiple animation types:

```jsx
<ScrollAnimation animation="fadeUp" delay={0.2}>
  <YourContent />
</ScrollAnimation>
```

**Available animations:**

- `fadeUp` - Fade in from bottom
- `fadeDown` - Fade in from top
- `fadeLeft` - Fade in from left
- `fadeRight` - Fade in from right
- `scale` - Scale in effect
- `rotate` - Rotate in effect
- `slideUp` - Slide up from bottom
- `bounce` - Bounce in effect

### 9. **LoadingSpinner.jsx**

Three different loading animations:

```jsx
// Main spinner with rotating ring and dots
<LoadingSpinner size={40} color="#00A39B" />

// Pulse dots
<PulseLoader color="#00A39B" />

// Wave bars
<WaveLoader color="#00A39B" />
```

### 10. **FloatingActionButton.jsx**

Interactive floating button with multiple effects:

```jsx
<FloatingActionButton
  icon={Plus}
  onClick={handleClick}
  color="#00A39B"
  size="large"
  position="bottom-right"
/>
```

**Features:**

- Spring entrance animation
- Hover effects with rotation and lift
- Ripple effect on hover
- Floating particles animation
- Glow effect
- Multiple positions and sizes

## 🛠️ Animation Utilities

### **src/utils/animations.js**

Predefined animation variants for consistent use:

```jsx
import { fadeInUp, staggerContainer, hoverScale } from "../utils/animations";

// Usage
<motion.div variants={fadeInUp}>
  <YourContent />
</motion.div>;
```

**Available variants:**

- **Entrance**: `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `rotateIn`
- **Containers**: `staggerContainer`, `staggerContainerFast`, `staggerContainerSlow`
- **Hover**: `hoverScale`, `hoverLift`, `hoverGlow`
- **Transitions**: `pageTransition`, `modalBackdrop`, `modalContent`
- **Loading**: `loadingSpinner`, `pulse`
- **Text**: `textReveal`, `characterReveal`
- **Cards**: `cardHover`, `cardEntrance`
- **Navigation**: `navItemHover`

## 🎨 Animation Features

### **Performance Optimized**

- Uses `whileInView` for scroll-triggered animations
- `viewport={{ once: true }}` prevents re-animation
- Efficient easing functions
- Hardware acceleration where possible

### **Accessibility**

- Respects `prefers-reduced-motion` media query
- Smooth, non-jarring animations
- Appropriate timing and easing

### **Responsive**

- Different animation timings for mobile/desktop
- Adaptive viewport triggers
- Touch-friendly interactions

### **Customizable**

- Easy to modify colors, timing, and effects
- Reusable animation variants
- Configurable parameters

## 🚀 Usage Examples

### Basic Scroll Animation

```jsx
import ScrollAnimation from "./components/ScrollAnimation";

<ScrollAnimation animation="fadeUp" delay={0.2}>
  <h2>Your Title</h2>
</ScrollAnimation>;
```

### Staggered List Animation

```jsx
import { staggerContainer } from "../utils/animations";

<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  {items.map((item, index) => (
    <motion.div key={index} variants={fadeInUp}>
      {item}
    </motion.div>
  ))}
</motion.div>;
```

### Interactive Button

```jsx
import { hoverScale } from "../utils/animations";

<motion.button variants={hoverScale} whileHover="hover" whileTap="tap">
  Click Me
</motion.button>;
```

## 🎯 Best Practices

1. **Use `whileInView`** for scroll-triggered animations
2. **Set `once: true`** to prevent re-animation
3. **Use appropriate easing** functions for natural movement
4. **Keep animations subtle** - enhance, don't distract
5. **Test on mobile** devices for performance
6. **Respect user preferences** for reduced motion

## 🔧 Customization

### Changing Animation Timing

```jsx
// In component
transition={{ duration: 0.8, delay: 0.2 }}

// In utilities
export const customAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
```

### Adding New Animation Types

```jsx
// Add to ScrollAnimation.jsx
const animations = {
  // ... existing animations
  custom: {
    hidden: { opacity: 0, rotate: 180 },
    visible: { opacity: 1, rotate: 0 },
  },
};
```

## 📱 Mobile Considerations

- Reduced animation complexity on smaller screens
- Touch-friendly hover alternatives
- Optimized performance for mobile devices
- Appropriate timing for mobile interactions

## 🎨 Color Integration

All animations use the Fiber One Asia brand colors:

- Primary: `#00A39B` (Teal)
- Secondary: `#913880` (Purple)
- Accent: `#B3E0DB` (Light Teal)
- Dark: `#0E1D2F` (Dark Blue)

---

**Created with ❤️ using Framer Motion**

For questions or customizations, refer to the Framer Motion documentation or modify the animation utilities as needed.
