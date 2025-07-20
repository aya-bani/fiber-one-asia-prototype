# Enhanced Service Cards with Modal Popups

This document outlines the enhanced CardService and ServiceSection components that feature background images and interactive modal popups.

## 🎯 Features

### **CardService Component**

- ✅ **Background Images** - Each card has a beautiful background image
- ✅ **Interactive Hover Effects** - Scale, lift, and shadow animations
- ✅ **Click to Expand** - Opens detailed modal popup
- ✅ **Modal with Details** - Comprehensive service information
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **Accessibility** - Keyboard navigation (ESC to close)
- ✅ **Responsive Design** - Works on all screen sizes

### **ServiceSection Component**

- ✅ **Enhanced Data Structure** - Includes images and detailed information
- ✅ **Staggered Animations** - Cards appear in sequence
- ✅ **Professional Layout** - Clean, modern design
- ✅ **Section Header** - Clear title and description

## 📁 File Structure

```
src/
├── components/
│   ├── CardService.jsx          # Enhanced service card with modal
│   ├── ServiceSection.jsx       # Updated service section
│   └── ServiceDemo.jsx          # Demo component
├── hooks/
│   └── useModal.js              # Custom modal hook
└── utils/
    └── animations.js            # Animation utilities
```

## 🚀 Usage

### Basic Implementation

```jsx
import CardService from "./components/CardService";

const service = {
  title: "Web Development",
  description: "Modern, scalable web applications",
  image: "https://example.com/image.jpg",
  details: [
    "Frontend Development (React, Vue, Angular)",
    "Backend Development (Node.js, Python)",
    "Database Design and Management",
    "API Development and Integration",
  ],
};

<CardService
  title={service.title}
  description={service.description}
  image={service.image}
  details={service.details}
  index={0}
/>;
```

### ServiceSection Implementation

```jsx
import ServiceSection from "./components/ServiceSection";

// The component automatically renders all services
<ServiceSection />;
```

## 🎨 Customization

### Adding New Services

Update the `services` array in `ServiceSection.jsx`:

```jsx
const services = [
  {
    title: "Your Service",
    description: "Service description",
    image: "https://your-image-url.com/image.jpg",
    details: ["Detail 1", "Detail 2", "Detail 3"],
  },
  // ... more services
];
```

### Customizing Images

You can use local images or external URLs:

```jsx
// Local images (recommended)
import designImage from '../assets/images/design.jpg';

// External URLs
const imageUrl = "https://images.unsplash.com/photo-...";

// In your service object
{
  title: "Design",
  image: designImage, // or imageUrl
  // ...
}
```

### Styling Customization

#### Card Styling

```jsx
// In CardService.jsx
const cardStyle = {
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  minHeight: "200px", // Adjust card height
};
```

#### Modal Styling

```jsx
// Modal container
className =
  "relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden";

// Modal header height
className = "relative h-48 overflow-hidden"; // Adjust height
```

## 🎭 Animation Features

### Card Animations

- **Entrance**: Fade in with scale and rotation
- **Hover**: Lift, scale, and shadow effects
- **Background**: Subtle zoom on hover
- **Text**: Staggered text animations

### Modal Animations

- **Backdrop**: Fade in/out with blur
- **Content**: Scale and slide entrance
- **Details**: Staggered list animations
- **Exit**: Smooth scale and fade out

### Custom Animation Timing

```jsx
// Adjust animation delays
const cardVariants = {
  visible: {
    transition: {
      duration: 0.6,
      delay: index * 0.1, // Stagger delay
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
```

## 🔧 Advanced Features

### Custom Modal Hook

The `useModal` hook provides:

- Keyboard support (ESC to close)
- Body scroll prevention
- Clean state management

```jsx
import useModal from "../hooks/useModal";

const { isOpen, openModal, closeModal } = useModal();
```

### Accessibility Features

- **Keyboard Navigation**: ESC key closes modal
- **Focus Management**: Proper focus trapping
- **Screen Reader Support**: Semantic HTML structure
- **Reduced Motion**: Respects user preferences

### Performance Optimizations

- **Image Optimization**: Use optimized images
- **Lazy Loading**: Images load on demand
- **Animation Performance**: Hardware acceleration
- **Memory Management**: Clean modal cleanup

## 📱 Responsive Design

### Breakpoints

- **Mobile**: Single column layout
- **Tablet**: Two column layout
- **Desktop**: Three column layout

### Grid Configuration

```jsx
const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Adjust min width
  gap: "2rem",
  padding: "2rem",
};
```

## 🎨 Brand Integration

### Color Scheme

Uses Fiber One Asia brand colors:

- **Primary**: `#00A39B` (Teal)
- **Secondary**: `#913880` (Purple)
- **Accent**: `#B3E0DB` (Light Teal)
- **Dark**: `#0E1D2F` (Dark Blue)

### Typography

- **Headings**: Bold, professional fonts
- **Body Text**: Readable, clean fonts
- **Buttons**: Consistent styling

## 🔍 Troubleshooting

### Common Issues

1. **Images Not Loading**

   ```jsx
   // Check image URLs
   console.log(service.image);

   // Use fallback images
   const fallbackImage = "https://via.placeholder.com/400x300";
   ```

2. **Modal Not Opening**

   ```jsx
   // Check click handler
   onClick = { openModal }; // Make sure this is correct

   // Check modal state
   console.log(isModalOpen);
   ```

3. **Animation Performance**
   ```jsx
   // Reduce animation complexity on mobile
   const isMobile = window.innerWidth < 768;
   const animationDuration = isMobile ? 0.3 : 0.6;
   ```

### Debug Mode

Add debug logging:

```jsx
const CardService = ({ title, description, index = 0, image, details }) => {
  console.log("CardService props:", { title, image, details });
  // ... rest of component
};
```

## 🚀 Best Practices

### Image Optimization

1. **Use WebP format** when possible
2. **Optimize image sizes** (max 1000px width)
3. **Provide alt text** for accessibility
4. **Use CDN** for faster loading

### Content Structure

1. **Keep titles short** (2-3 words)
2. **Descriptions concise** (1-2 sentences)
3. **Details specific** (4-6 bullet points)
4. **Use action verbs** in details

### Performance

1. **Lazy load images** for better performance
2. **Preload critical images** for faster UX
3. **Optimize animations** for mobile devices
4. **Use proper caching** strategies

## 📋 Example Service Data

```jsx
const exampleService = {
  title: "UI/UX Design",
  description: "Beautiful, intuitive user experiences that convert",
  image:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&q=80",
  details: [
    "User Research and Persona Development",
    "Wireframing and Prototyping",
    "Visual Design and Brand Integration",
    "User Testing and Iteration",
    "Design System Creation",
    "Responsive Design Implementation",
  ],
};
```

## 🎯 Future Enhancements

### Planned Features

- [ ] **Image Gallery** in modal
- [ ] **Video Integration** for services
- [ ] **Contact Forms** in modal
- [ ] **Pricing Information** display
- [ ] **Client Testimonials** integration
- [ ] **Service Comparison** feature

### Customization Options

- [ ] **Theme Switcher** for different color schemes
- [ ] **Layout Options** (grid, list, masonry)
- [ ] **Animation Presets** for different styles
- [ ] **Modal Sizes** (small, medium, large)

---

**Created with ❤️ for Fiber One Asia**

For questions or customizations, refer to the component files or contact the development team.
