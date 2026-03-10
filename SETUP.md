# Setup Guide - Alfredo Wiesner Portfolio

This guide walks you through setting up and deploying the portfolio website.

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git
- GitHub account (for deployment)
- Vercel account (optional, for deployment)

## Local Development

### 1. Clone and Install

```bash
git clone https://github.com/alrod-dev/portfolio-site.git
cd portfolio-site
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser. The site will hot-reload as you make changes.

### 3. Build for Production

```bash
npm run build
npm start
```

The optimized production build will be available at `http://localhost:3000`

## Customization

### Update Personal Information

Edit `data/index.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  // ... other fields
}
```

### Modify Projects

Add, update, or remove projects in `data/index.ts` in the `PROJECTS` array:

```typescript
{
  id: 9,
  title: 'your-project-name',
  subtitle: 'Project description',
  description: 'Detailed description of what the project does',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/your-repo',
  demo: 'https://your-project.vercel.app',
  icon: '🎯',
  color: 'from-cyan-500 to-blue-500',
}
```

### Update Experience

Edit the `EXPERIENCE` array in `data/index.ts` to add or modify work experience.

### Customize Skills

Update the `SKILLS` object in `data/index.ts` to add or remove skill categories and items.

## Styling Customization

### Color Scheme

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  cyan: {
    500: '#06b6d4', // Primary color
    // ... other shades
  },
  navy: {
    900: '#0a0a1a', // Dark background
    // ... other shades
  },
}
```

### Fonts

Add custom fonts in `app/layout.tsx`:

```typescript
import { DM_Sans, Inconsolata } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })
```

### Animations

Modify animation settings in:
- `tailwind.config.ts` - Keyframes and animation timing
- Individual component files - Framer Motion animations
- `app/globals.css` - Global animation definitions

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Build the project
- Optimize assets
- Deploy to CDN
- Enable automatic previews for pull requests

### Deploy to Other Platforms

#### Netlify

1. Build: `npm run build`
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### AWS, GCP, Azure

Use their respective Node.js deployment guides and ensure Node.js 18+ is available.

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/alrod-dev
NEXT_PUBLIC_EMAIL=alrod.dev@gmail.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/alrod-dev
```

## Contact Form Integration

The contact form currently logs to the console. To make it functional:

### Option 1: Using Formspree

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form ID
4. Update `Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('email', form.email)
  formData.append('name', form.name)
  formData.append('message', form.message)

  const response = await fetch(`https://formspree.io/f/YOUR_FORM_ID`, {
    method: 'POST',
    body: formData,
  })
  // Handle response
}
```

### Option 2: Using a Backend Service

Create an API route in `app/api/contact/route.ts`:

```typescript
export async function POST(request: Request) {
  const data = await request.json()
  // Send email or store in database
  return Response.json({ success: true })
}
```

## Performance Optimization

### Image Optimization

Replace any images with optimized versions:
- Use WebP format when possible
- Use Next.js Image component for automatic optimization
- Compress images before adding to project

### Bundle Analysis

```bash
npm install --save-dev @next/bundle-analyzer
```

Update `next.config.js` to analyze bundle size.

### Monitoring

- Use Vercel Analytics for performance monitoring
- Check Core Web Vitals in Google Search Console
- Monitor Lighthouse scores

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors

1. Clear cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node version: `node --version` (should be 18+)

### 3D Scene Not Rendering

- Check browser console for WebGL errors
- Ensure hardware acceleration is enabled
- Test with a modern browser (Chrome, Firefox, Safari, Edge)

## Best Practices

### Content Updates

1. Keep personal information in `data/index.ts`
2. Test all links before deployment
3. Use meaningful project descriptions
4. Keep skills and technologies current

### Code Quality

1. Run type checking: `npm run type-check`
2. Follow the existing code style
3. Test changes locally before deploying
4. Keep dependencies updated

### SEO

- Update meta descriptions in components
- Use semantic HTML
- Ensure all links work
- Optimize images with alt text

## Maintenance

### Regular Updates

- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Review analytics and update projects as needed
- Refresh skills and experience sections quarterly

### Backup

- Keep a local backup of your code
- Use GitHub as your primary backup
- Document any custom configurations

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Documentation](https://gsap.com/docs/)

## License

This portfolio template is open source and available under the MIT License.
