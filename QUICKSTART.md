# Quick Start Guide

Get up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. You'll see the portfolio with:
- 3D animated hero section
- Smooth scroll animations
- Dark/light mode toggle
- All 8 projects showcased
- Experience timeline
- Skills showcase
- Contact section

## 3. Customize Your Information

Edit `/data/index.ts` and update:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  bio: 'Your professional bio',
  taglines: ['Tagline 1', 'Tagline 2', 'Tagline 3'],
}
```

Then update the `PROJECTS`, `EXPERIENCE`, and `SKILLS` arrays in the same file.

## 4. Test Locally

```bash
npm run build
npm start
```

## 5. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Your portfolio is live.

## Common Customizations

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  cyan: {
    500: '#your-color-code',
  },
}
```

### Update Projects

Add a new project to the `PROJECTS` array in `data/index.ts`:

```typescript
{
  id: 9,
  title: 'my-awesome-project',
  subtitle: 'Project tagline',
  description: 'Detailed description',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  github: 'https://github.com/username/repo',
  demo: 'https://project-url.vercel.app',
  icon: '🚀',
  color: 'from-cyan-500 to-blue-500',
}
```

### Change Theme Colors (Dark/Light)

Update these in `tailwind.config.ts`:

```typescript
navy: {
  900: '#your-dark-bg-color',
},
slate: {
  850: '#your-dark-card-color',
},
```

## Next Steps

- See `README.md` for complete documentation
- See `SETUP.md` for detailed customization guide
- See `DEPLOYMENT_CHECKLIST.md` before going live

## Need Help?

- Check `README.md` for features & architecture
- Check `SETUP.md` for troubleshooting
- Review component files to understand structure
- All data is in `data/index.ts` - edit there for content updates

## File Structure You Need to Know

```
portfolio-site/
├── data/index.ts          ← UPDATE YOUR CONTENT HERE
├── tailwind.config.ts     ← CUSTOMIZE COLORS HERE
├── components/            ← Pre-built components (no changes needed)
├── app/                   ← Pages & layout (ready to go)
└── package.json           ← Dependencies (npm install handles this)
```

## Environment Variables (Optional)

Create `.env.local` for custom settings:

```
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
```

Then use in components:

```typescript
const email = process.env.NEXT_PUBLIC_EMAIL
```

## Production Checklist

Before deploying:

- [ ] Updated all content in `data/index.ts`
- [ ] Tested locally with `npm run dev`
- [ ] Built production version: `npm run build`
- [ ] Tested production: `npm start`
- [ ] Tested on mobile device
- [ ] Tested dark/light mode toggle
- [ ] Verified all links work
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel

See `DEPLOYMENT_CHECKLIST.md` for comprehensive checklist.

---

**Ready to launch?** Push to GitHub and deploy to Vercel in 2 minutes!
