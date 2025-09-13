# Zain Cura Medical Center - Complete Healthcare Website with Blog CMS

A comprehensive Next.js website for Zain Cura Medical Center featuring VIP healthcare memberships, medical services, and a **full-featured blog management system** with admin panel.

## 🌟 Features

### 🏥 Medical Website
- **VIP Healthcare Memberships** - Gold and Silver tiers with exclusive benefits
- **Medical Services** - GP, Lab Tests, Wellness Checks, Home Care, etc.
- **SEO Optimized** - Enhanced structured data and sitelinks
- **Responsive Design** - Mobile-first approach
- **Contact Integration** - WhatsApp and phone call CTAs

### 📝 Blog Management System (NEW)
- **Complete Admin Panel** - Full CRUD blog management
- **Rich Text Editor** - Markdown support with formatting tools
- **Image Management** - Upload, gallery browser, drag & drop
- **SEO Optimization** - Meta tags, descriptions, structured data
- **Authentication System** - Secure admin access
- **Content Categories** - Health tips, medical news, nutrition, etc.

## 🔐 Admin Access

### **Live Admin Panel URLs:**
- **Admin Portal:** `/admin` - Landing page with access info
- **Admin Login:** `/admin/login` - Authentication page
- **Admin Dashboard:** `/admin/dashboard` - Main management interface

### **Admin Credentials:**
```
Username: admin
Password: ZainCura2024!
```

### **Admin Features:**
- ✅ Create, edit, delete blog posts
- ✅ Upload and manage images (drag & drop + gallery)
- ✅ SEO metadata management
- ✅ Content categorization and tagging
- ✅ Draft/published status control
- ✅ Real-time statistics and analytics
- ✅ Responsive admin interface

## 🚀 Quick Start

### **For Content Managers:**
1. Visit `/admin` on your website
2. Click "Access Admin Dashboard"
3. Login with credentials above
4. Start creating and managing blog content!

### **For Developers:**
```bash
# Clone the repository
git clone https://github.com/danishpaeds/zaincura-medical.git
cd zaincura-medical

# Install dependencies
bun install

# Start development server
bun dev

# Visit http://localhost:3000
```

## 📁 Project Structure

```
zaincura-medical/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin panel pages
│   │   │   ├── page.tsx        # Admin landing page
│   │   │   ├── login/          # Admin authentication
│   │   │   └── dashboard/      # Main admin interface
│   │   ├── api/
│   │   │   └── admin/          # Admin API routes
│   │   │       ├── auth/       # Authentication endpoints
│   │   │       ├── blogs/      # Blog CRUD operations
│   │   │       ├── upload/     # Image upload handling
│   │   │       └── images/     # Image gallery API
│   │   ├── blog/               # Public blog pages
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/         # Individual blog posts
│   │   └── [medical-services]/ # Service pages
│   ├── components/
│   │   ├── admin/              # Admin panel components
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── BlogEditor.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   └── ImageGallery.tsx
│   │   └── BreadcrumbSchema.tsx
│   └── lib/
│       ├── auth.ts            # Authentication utilities
│       └── blog.ts            # Blog data management
├── data/
│   └── blog-posts.json       # Blog posts storage
├── public/
│   ├── uploads/blog/         # Uploaded images
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # Search engine directives
└── netlify.toml             # Deployment configuration
```

## 🌐 Live Website Access

### **Public Pages:**
- **Homepage:** `/` - Main medical center website
- **Blog:** `/blog` - Public blog with health articles
- **Services:** Various medical service pages
- **About/Contact:** Information and contact details

### **Admin Portal Access:**
- **Direct Link:** `/admin` - Professional admin access page
- **Footer Link:** "Staff Portal" in website footer (discrete)

## 📊 Blog Content Management

### **Creating Blog Posts:**
1. Access admin dashboard
2. Click "Create New Post"
3. Add title, content, and metadata
4. Upload featured image (drag & drop supported)
5. Set category and tags
6. Publish or save as draft

### **Image Management:**
- **Upload:** Drag & drop or click to upload
- **Gallery:** Browse previously uploaded images
- **Formats:** JPEG, PNG, WebP, GIF (up to 5MB)
- **Features:** Auto-resize, validation, preview

### **SEO Optimization:**
- Auto-generated meta descriptions
- Structured data (JSON-LD) for search engines
- Optimized URLs and sitemaps
- Social media sharing tags

## 🛠️ Technical Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Authentication:** Custom session-based system
- **Storage:** File-based (upgradeable to database)
- **Deployment:** Netlify with continuous deployment
- **Package Manager:** Bun

## 🔒 Security Features

- **Session Authentication** - 24-hour secure sessions
- **Protected Routes** - Admin API endpoints secured
- **File Validation** - Image type and size checking
- **Input Sanitization** - Content validation and filtering
- **HTTPS Only** - Secure connections in production

## 📈 SEO & Performance

- **Perfect Lighthouse Scores** - Optimized for performance
- **Structured Data** - Rich snippets and sitelinks
- **Mobile First** - Responsive design throughout
- **Fast Loading** - Static generation and optimization
- **Search Engine Ready** - Sitemap, robots.txt, meta tags

## 🚀 Deployment

### **Netlify (Current):**
- **Auto Deploy:** Connected to GitHub master branch
- **Build Command:** `bun run build`
- **Publish Directory:** `out`
- **Continuous Deployment:** Enabled

### **Manual Deployment:**
```bash
# Build for production
bun run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

## 📞 Support & Contact

- **Website:** https://zaincura.com
- **Admin Portal:** https://zaincura.com/admin
- **Technical Issues:** Contact repository maintainer
- **Medical Inquiries:** +971-45703423

## 📋 Version History

- **v86** - Complete image upload and gallery system
- **v85** - Blog admin panel with full CRUD operations
- **v84** - Authentication and blog editor implementation
- **v83** - Enhanced SEO with sitelinks and structured data
- **v82** - Initial blog system foundation

## 🎯 Next Steps

The system is **production-ready** with:
- ✅ Complete admin panel
- ✅ Image management system
- ✅ SEO optimization
- ✅ Security implementation
- ✅ Responsive design
- ✅ Content management tools

**Ready for content creation and scaling!** 🚀

---

**© 2024 Zain Cura Medical Center. All rights reserved.**
