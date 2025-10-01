# 💖 Romantic Birthday Wish Website

A beautiful, interactive, and romantic birthday wishing website built with Next.js 14, TypeScript, and TailwindCSS. Features stunning animations, photo galleries, love letters, and interactive surprises to make someone's birthday truly special.

## ✨ Features

- 🎨 **Beautiful Design**: Romantic pastel color scheme with gradient backgrounds
- 🎭 **Smooth Animations**: Framer Motion powered animations throughout
- 📸 **Photo Gallery**: Responsive grid with modal lightbox
- 💌 **Love Letter**: Aged paper design with floating hearts
- 🎈 **Interactive Features**: Balloon pop game and birthday cake candles
- 🎵 **Music Player**: Background music with glassmorphism controls
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: Proper ARIA labels and keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git
   git clone <repository-url>
   cd romantic-birthday-wish
   
   # Or download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Personalizing the Content

#### Changing the Name
Edit `app/page.tsx` and update the name prop:
```tsx
<LandingPage 
  name="Sarah" // Change this to the birthday person's name
  onScrollToNext={scrollToPhotoGallery}
/>
```

#### Customizing the Love Letter
Edit `app/components/LoveLetterSection.tsx` and update the `letterContent` prop:
```tsx
<LoveLetterSection 
  letterContent="Your custom love letter here..."
/>
```

#### Updating Photo Gallery
1. Add your photos to `public/photos/` directory
2. Name them: `photo1.jpg`, `photo2.jpg`, etc.
3. Update captions in `app/components/PhotoGallery.tsx`:
```tsx
const photos = [
  { id: 1, src: '/photos/photo1.jpg', caption: 'Our first date', alt: 'Beautiful memory' },
  // Add more photos...
]
```

### 2. Adding Background Music

1. Add your music file to `public/music/`
2. Name it `background.mp3` (or update the path in `MusicPlayer.tsx`)
3. Supported formats: MP3, WAV, OGG
4. Keep file size under 5MB for better performance

### 3. Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:
```ts
colors: {
  'romantic-pink': '#FFC0CB',      // Main pink
  'romantic-lavender': '#E6E6FA',  // Lavender
  'romantic-accent': '#FFB6C1',    // Light pink
  'romantic-cream': '#FFF8DC',     // Cream
  'romantic-rose': '#FFB6C1',      // Rose
}
```

### 4. Changing Fonts

Update `app/layout.tsx` to use different Google Fonts:
```tsx
import { Dancing_Script, Poppins, Pacifico } from 'next/font/google'

// Change to your preferred fonts
const customFont = Your_Font({ 
  subsets: ['latin'],
  variable: '--font-custom',
  display: 'swap',
})
```

### 5. Modifying Animations

Edit `app/globals.css` to customize animations:
```css
@keyframes customAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

## 📁 Project Structure

```
romantic-birthday-wish/
├── app/
│   ├── components/
│   │   ├── LandingPage.tsx          # Landing page with animations
│   │   ├── PhotoGallery.tsx         # Photo gallery with modal
│   │   ├── LoveLetterSection.tsx   # Love letter with aged paper design
│   │   ├── InteractiveFeature.tsx  # Balloon pop & cake candles
│   │   ├── FinalMessage.tsx        # Final message with heart animations
│   │   └── MusicPlayer.tsx         # Music player with glassmorphism
│   ├── globals.css                  # Global styles and animations
│   ├── layout.tsx                  # Root layout with fonts
│   └── page.tsx                    # Main page combining all components
├── public/
│   ├── photos/                     # Add your photos here
│   ├── music/                      # Add background music here
│   └── images/                     # Add decorative images here
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

## 🎯 Component Details

### LandingPage
- Gradient background with floating hearts
- Animated main heading and subheading
- Call-to-action button with hover effects
- Scroll indicator

### PhotoGallery
- Responsive grid layout
- Modal lightbox with navigation
- Hover effects and animations
- Placeholder system for easy photo replacement

### LoveLetterSection
- Aged paper design with texture
- Floating hearts animation
- Handwriting-style font
- Decorative corner elements

### InteractiveFeature
- **Balloon Pop**: Click balloons to pop with confetti
- **Cake Candles**: Blow out candles with particle effects
- Toggle between features
- Reset functionality

### FinalMessage
- Large animated heart
- Romantic message
- Action buttons
- Decorative elements

### MusicPlayer
- Glassmorphism design
- Volume control
- Play/pause functionality
- Floating button

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings

### Other Platforms

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

#### GitHub Pages
1. Add `next export` to build script
2. Configure GitHub Actions for deployment

## 🎨 Design System

### Colors
- **Primary**: Romantic Pink (#FFC0CB)
- **Secondary**: Lavender (#E6E6FA)
- **Accent**: Light Pink (#FFB6C1)
- **Background**: Cream (#FFF8DC)
- **Text**: Gray-800 for readability

### Typography
- **Headings**: Dancing Script (cursive, romantic)
- **Body**: Poppins (clean, readable)
- **Accents**: Pacifico (playful)

### Spacing
- **Sections**: min-h-screen (full viewport height)
- **Padding**: p-8 md:p-16
- **Gaps**: gap-8 for grids

## 📱 Responsive Design

- **Mobile**: Stack elements vertically
- **Tablet**: 2-column layouts
- **Desktop**: 3-column layouts
- **Breakpoints**: sm, md, lg, xl

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## 🎵 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Efficient animations with Framer Motion
- Minimal bundle size

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Features

1. Create new component in `app/components/`
2. Import and use in `app/page.tsx`
3. Add TypeScript interfaces for props
4. Style with TailwindCSS classes

## 🎉 Tips for Best Results

### Photos
- Use high-quality images (800x600 or larger)
- Optimize file sizes (under 500KB each)
- Use consistent aspect ratios
- Add meaningful captions

### Music
- Choose romantic, soft background music
- Keep volume levels moderate
- Use royalty-free music
- Test on different devices

### Content
- Write from the heart
- Keep messages personal and genuine
- Use romantic language
- Include inside jokes or memories

## 🐛 Troubleshooting

### Common Issues

**Music not playing?**
- Check file format (MP3 recommended)
- Ensure file is in `public/music/`
- Check browser autoplay policies

**Photos not showing?**
- Verify file names match the code
- Check file formats (JPG, PNG, WEBP)
- Ensure files are in `public/photos/`

**Animations not smooth?**
- Check browser performance
- Reduce animation complexity
- Test on different devices

**Build errors?**
- Run `npm install` to ensure dependencies
- Check TypeScript errors
- Verify file paths

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Support

If you love this project and want to support it:

1. ⭐ Star the repository
2. 🐛 Report bugs
3. 💡 Suggest features
4. 📤 Share with others

## 🎊 Final Notes

This website is designed to create magical, romantic moments. Customize it with your personal touch, add your own photos and music, and watch the joy on your loved one's face as they experience this beautiful birthday surprise.

**Happy Birthday! 🎂💖**

---

Made with ❤️ and lots of love
