# Alfredo Wiesner - Portfolio Website

A production-ready, modern portfolio website showcasing 8+ years of experience in AI engineering, full-stack development, and design systems. Built with cutting-edge technologies and optimized for performance.

## Features

- **3D Animated Hero Section** - Programmatic Three.js scene with floating geometric shapes and particle field
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Smooth theme switching with persistent preferences
- **Smooth Animations** - Framer Motion for UI animations and GSAP for scroll-based effects
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **SEO Friendly** - Proper meta tags, structured data, and accessibility features
- **Modern Tech Stack** - Next.js 14, TypeScript, Tailwind CSS
- **Professional Design** - Clean, minimal aesthetic with professional color scheme

## Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React** - UI library

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### Animations & 3D
- **Framer Motion** - React animation library
- **GSAP** - Advanced animations and scroll triggers
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js

### Theme Management
- **next-themes** - Dark/light mode support

### UI Components
- **Lucide React** - Beautiful icon library
- **Shadcn/UI utilities** - Class utilities and helpers

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/alrod-dev/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── providers.tsx       # Theme provider setup
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with 3D background
│   ├── About.tsx           # Bento grid about section
│   ├── Projects.tsx        # Projects grid showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills and technologies
│   ├── Contact.tsx         # Contact section and form
│   ├── Footer.tsx          # Footer
│   ├── ThreeScene.tsx      # 3D Three.js scene
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── data/
│   └── index.ts            # All content data (centralized)
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Sections

### Hero
- Large animated heading with typewriter effect
- Cycling taglines: "AI Engineer", "Front-End Architect", "Full-Stack Developer"
- 3D background with floating geometric shapes and particle field
- Call-to-action buttons
- Smooth scroll indicator

### About (Bento Grid)
- Introduction card with code editor aesthetic
- Remote work availability globe
- Tech stack overview
- Statistics showcase
- Currently building card
- Contact CTA

### Projects
- 8 featured projects with descriptions
- Technology stack badges
- GitHub and live demo links
- Hover animations and effects
- Projects include:
  - ai-nexus-chat
  - rag-engine
  - auto-reviewer
  - ml-pipeline-studio
  - vue-forge
  - react-realtime-dashboard
  - next-commerce
  - aem-react-toolkit

### Experience
- Vertical timeline with animated entries
- 3 professional experiences
- Company details and descriptions
- Key highlights for each role

### Skills
- Categorized skill badges
- 4 main categories:
  - AI & ML
  - Front-End
  - Back-End
  - DevOps & Tools
- Hover animations

### Contact
- Email, GitHub, and LinkedIn links
- Contact form (ready for backend integration)
- Copy email to clipboard functionality
- Social media connections

### Footer
- Brand information
- Quick navigation links
- Social media icons
- Copyright information

## Customization

### Update Content
Edit `/data/index.ts` to update:
- Personal information
- Projects
- Experience
- Skills
- About cards
- Statistics

### Change Colors
Modify the color scheme in `tailwind.config.ts`:
- Primary cyan color: `#06b6d4`
- Secondary blue: `#3b82f6`
- Dark base: `#0a0a1a`
- Card background: `#1e293b` (dark), `#f8fafc` (light)

### Modify Animations
- Framer Motion animations: Edit component files
- GSAP scroll animations: See `About.tsx`, `Projects.tsx`, etc.
- Global animations: Update `app/globals.css`

## Performance Optimizations

- Dynamic imports for heavy 3D components
- Lazy loading with intersection observers
- Optimized images with next/image
- Code splitting and tree-shaking
- CSS purging in production
- Minimal JavaScript bundle
- Efficient scroll event handling with GSAP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Alt text for images

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys from GitHub
```

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder and `public` directory
3. Set environment variables as needed
4. Configure Node.js version to 18+

## Contact Form Integration

The contact form is currently a placeholder. To make it functional, integrate with a backend service:

- **Backend Options**: Nodemailer, SendGrid, Mailgun, Formspree, etc.
- **Update**: Modify the `handleSubmit` function in `Contact.tsx`

## Environment Variables

Create a `.env.local` file if you need environment-specific variables:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/alrod-dev
NEXT_PUBLIC_EMAIL=alrod.dev@gmail.com
```

## License

MIT License - feel free to use this portfolio as a template for your own

## Author

**Alfredo Wiesner**
- GitHub: [@alrod-dev](https://github.com/alrod-dev)
- Email: alrod.dev@gmail.com
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/alrod-dev)

---

Built with Next.js, Three.js, and Framer Motion. Designed for modern web development excellence.
