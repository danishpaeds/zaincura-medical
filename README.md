# Zain Cura Medical Center Website

A comprehensive medical center website built with Next.js 15, featuring VIP healthcare membership, corporate wellness programs, and 41+ SEO-optimized medical service pages.

## 🌟 Features

### VIP Healthcare Membership
- **Gold Tier**: Unlimited priority appointments, complimentary home care, quarterly wellness checks
- **Silver Tier**: Priority booking, wellness checks, 24/7 nurse consultation
- **Savings**: Up to AED 2,801 per year

### Corporate Wellness Services
- AI-powered employee health programs
- Custom packages for businesses
- Absenteeism reduction strategies
- On-site wellness camps

### Medical Services (41+ Pages)
- GP / Family Medicine
- Women's Health (Gynecologist)
- Clinical Dietician & Nutrition
- Laboratory Testing & Diagnostics
- Home Healthcare Services
- IV Drip Therapy
- Wellness Health Checks
- Corporate Health Programs

## 🚀 Netlify Deployment

### Quick Deploy to Netlify

1. **Connect Repository to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select this repository

2. **Build Settings:**
   ```
   Build command: bun run build
   Publish directory: out
   Node version: 18.x
   ```

3. **Environment Variables (Optional):**
   ```
   NODE_VERSION=18
   BUN_VERSION=1.0.0
   ```

### Manual Deployment

```bash
# Clone the repository
git clone https://github.com/danishpaeds/zaincura-medical-website.git
cd zaincura-medical-website

# Install dependencies
bun install

# Build for production
bun run build

# Deploy to Netlify (requires Netlify CLI)
netlify deploy --prod --dir=out
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ or Bun 1.0+
- Git

### Local Development

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Open http://localhost:3000
```

### Build Commands

```bash
# Development
bun dev

# Production build
bun run build

# Start production server (for testing)
bun start

# Lint code
bun run lint
```

## 📁 Project Structure

```
zaincura-medical-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage with VIP membership
│   │   ├── membership/        # VIP membership features
│   │   ├── corporate-wellness-dubai/ # Corporate wellness
│   │   ├── services/          # Medical services hub
│   │   └── [41+ service pages] # Individual service pages
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Navigation.tsx    # Main navigation
│   │   └── Footer.tsx        # Site footer
│   └── lib/                  # Utilities and helpers
├── public/                   # Static assets
├── netlify.toml             # Netlify configuration
├── next.config.js           # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Deployment**: Netlify (Static Site)

## 📱 SEO & Performance

- **Static Site Generation**: All pages pre-rendered for optimal performance
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, JSON-LD schema
- **Mobile Responsive**: Fully responsive design for all devices
- **Fast Loading**: Optimized images and code splitting
- **Lighthouse Score**: 90+ on all metrics

## 🏥 Business Features

### Patient-Focused
- Online appointment booking
- VIP membership with exclusive benefits
- 24/7 home healthcare services
- Same-day medical consultations
- Confidential medical testing

### Corporate-Focused
- Employee wellness programs
- Custom health packages
- AI-powered health analytics
- On-site medical services
- Productivity enhancement programs

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `next.config.js` - Next.js static export configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration

## 📞 Support

For technical support or deployment issues:
- Repository: [GitHub](https://github.com/danishpaeds/zaincura-medical-website)
- Medical Center: [zaincura.com](https://zaincura.com)

## 📄 License

Proprietary - Zain Cura Medical Center. All rights reserved.
