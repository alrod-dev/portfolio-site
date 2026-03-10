# Deployment Checklist

Use this checklist before deploying your portfolio to production.

## Pre-Deployment

### Code Quality
- [ ] Run `npm run type-check` - No TypeScript errors
- [ ] No console.log() statements in production code
- [ ] All imports are used (no unused variables)
- [ ] Code follows project conventions
- [ ] All components are properly formatted

### Testing
- [ ] Test locally with `npm run dev`
- [ ] Test production build: `npm run build && npm start`
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on tablets
- [ ] Test in all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test dark mode toggle
- [ ] Test all navigation links
- [ ] Test all external links (GitHub, LinkedIn, email)
- [ ] Test form submission (check console output)

### Content Review
- [ ] Personal information is correct and current
- [ ] All project links are working
- [ ] All project descriptions are accurate
- [ ] Experience information is up-to-date
- [ ] Skills list is current
- [ ] No typos or grammatical errors
- [ ] All dates are correct
- [ ] Email address is correct

### Performance
- [ ] Run Lighthouse audit (target score 90+)
- [ ] Check Core Web Vitals
- [ ] Verify images are optimized
- [ ] Check bundle size is reasonable
- [ ] 3D scene performs well (60 FPS)
- [ ] No memory leaks in dev tools

### SEO & Metadata
- [ ] Page title is set correctly
- [ ] Meta description is set
- [ ] OG (Open Graph) tags are configured
- [ ] Twitter card metadata is set
- [ ] Favicon is configured
- [ ] robots.txt allows indexing (if needed)

### Accessibility
- [ ] Test with keyboard navigation only
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators are visible
- [ ] All interactive elements are keyboard accessible

### Security
- [ ] No sensitive information in code
- [ ] No API keys or credentials in repo
- [ ] Environment variables are properly configured
- [ ] HTTPS will be enforced (on Vercel by default)
- [ ] No external scripts with security risks
- [ ] Content Security Policy headers are set

## Before Pushing to GitHub

- [ ] `.gitignore` includes sensitive files
- [ ] No node_modules in git
- [ ] No .env files in git (use .env.example)
- [ ] README.md is complete and accurate
- [ ] Package.json scripts are correct
- [ ] All dependencies are listed

## GitHub Repository Setup

- [ ] Repository is public
- [ ] Repository description is set
- [ ] Topics/tags are added
- [ ] README badges are added (optional)
- [ ] GitHub Actions workflows are configured (if needed)
- [ ] Branch protection rules are set (for main branch)

## Vercel Deployment

### Pre-Deployment
- [ ] GitHub repository is connected to Vercel
- [ ] Project is created on Vercel
- [ ] Environment variables are configured (if needed)
- [ ] Build command is set: `npm run build`
- [ ] Output directory is set: `.next`
- [ ] Node.js version is set to 18+

### During Deployment
- [ ] Monitor deployment logs for errors
- [ ] Check that build succeeds
- [ ] Verify preview deployment works
- [ ] Test on preview URL

### Post-Deployment
- [ ] Test production URL in all browsers
- [ ] Verify all links work on production
- [ ] Check that dark mode works
- [ ] Verify form still functions
- [ ] Check analytics (if configured)
- [ ] Monitor Vercel dashboard for errors

## Custom Domain (Optional)

- [ ] Purchase domain
- [ ] Add domain to Vercel project
- [ ] Configure DNS records
- [ ] Wait for SSL certificate to generate
- [ ] Verify HTTPS is enforced
- [ ] Update social media profiles with new URL
- [ ] Update GitHub profile links

## Post-Launch Monitoring

### Week 1
- [ ] Monitor error logs daily
- [ ] Check performance metrics
- [ ] Verify analytics are tracking
- [ ] Monitor for any 404 errors
- [ ] Check uptime monitoring

### Ongoing
- [ ] Update projects quarterly
- [ ] Review analytics monthly
- [ ] Check for dependency updates monthly
- [ ] Verify links are still working monthly
- [ ] Test form submission monthly

## Performance Targets

- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Best Practices: 95+
- [ ] Lighthouse SEO: 95+
- [ ] First Contentful Paint (FCP): < 1.8s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1

## Final Approval

- [ ] All checklist items completed
- [ ] Personal review complete
- [ ] Ready for production deployment
- [ ] Share with network/mentors for feedback
- [ ] Document any customizations made

---

**Deployed Date:** _______________

**Deployed To:** _______________

**Notes:**
```
[Add any notes about the deployment]
```
