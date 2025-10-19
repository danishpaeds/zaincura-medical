# 🔗 Frontend API Integration Guide

## ✅ What Was Updated

Your frontend has been updated to fetch blogs dynamically from the backend API instead of static JSON files.

---

## 🎯 Key Changes Made

### 1. **New API Client Created**
**File**: `src/lib/api.ts`

- Fetches blogs from backend API
- Handles published posts only
- Includes error handling
- Supports revalidation (refreshes every 60 seconds)

### 2. **Blog Pages Updated**
- ✅ `src/app/blog/page.tsx` - Blog listing page
- ✅ `src/app/blog/[slug]/page.tsx` - Individual blog post page

### 3. **Environment Configuration**
- ✅ `.env.local` - Backend API URL configuration

---

## 🌐 How It Works Now

```
Daily Blog Posts
      ↓
   N8N Workflow
      ↓
Backend API (Vercel)
      ↓
Supabase Database
      ↑
Frontend API Client (fetch every 60s)
      ↓
zaincura.com displays latest blogs
```

**Key Feature**: New blogs posted via N8N appear on your frontend **automatically within 60 seconds** - no rebuild needed!

---

## 🔧 Configuration

### Step 1: Update Backend API URL

Edit `.env.local` in your frontend:

```bash
# For local development (if backend running locally)
NEXT_PUBLIC_API_URL=http://localhost:3000

# For production (after backend is deployed)
NEXT_PUBLIC_API_URL=https://zaincura-backend.vercel.app

# Or with custom domain:
NEXT_PUBLIC_API_URL=https://api.zaincura.com
```

### Step 2: Build Variables in Netlify

When deploying to Netlify, add this environment variable:

1. Netlify Dashboard → Your Site → Site Settings → Environment Variables
2. Add:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://zaincura-backend.vercel.app`
   - **Scopes**: All (Production, Deploy Previews, Branch Deploys)

---

## 🚀 Deployment Steps

### 1. **Deploy Backend First**
```bash
# Make sure backend is deployed to Vercel
# Follow: zaincura-backend/VERCEL_DEPLOYMENT.md
```

### 2. **Update Frontend Environment Variable**

**Option A: Using Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Set environment variable
netlify env:set NEXT_PUBLIC_API_URL https://zaincura-backend.vercel.app
```

**Option B: Using Netlify Dashboard**
1. Go to https://app.netlify.com
2. Select your site
3. Site Settings → Environment Variables
4. Add variable:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://zaincura-backend.vercel.app`

### 3. **Redeploy Frontend**

**Trigger new deployment:**
```bash
# Option 1: Push to Git
git add .
git commit -m "Update to fetch blogs from backend API"
git push origin main

# Option 2: Netlify CLI
netlify deploy --prod

# Option 3: Netlify Dashboard
# Deploys → Trigger deploy → Deploy site
```

---

## 🧪 Testing

### Test Locally

1. **Start backend locally** (optional):
```bash
cd /home/project/zaincura-backend
bun run dev
# Backend runs on http://localhost:3000
```

2. **Start frontend**:
```bash
cd /home/project/zaincura-medical
bun run dev
# Frontend runs on http://localhost:3001 (or different port)
```

3. **Visit**: http://localhost:3001/blog

### Test Production

1. **After deploying both backend and frontend:**
```bash
# Check backend API works
curl https://zaincura-backend.vercel.app/api/blogs

# Should return:
# {"success":true,"data":[...],"count":X}
```

2. **Check frontend:**
   - Visit: https://zaincura.com/blog
   - New blogs should appear automatically

---

## 📊 API Endpoints Used

| Endpoint | Purpose | Revalidation |
|----------|---------|--------------|
| `GET /api/blogs` | List all published blogs | 60 seconds |
| `GET /api/blogs/[slug]` | Get single blog post | 60 seconds |

**Revalidation**: Frontend refreshes blog data every 60 seconds. You can adjust this in `src/lib/api.ts`:

```typescript
// Change from 60 to your preferred seconds
next: { revalidate: 60 }
```

---

## 🎨 Field Mapping

The backend API uses snake_case, frontend displays them as needed:

| Backend (API) | Frontend Display |
|---------------|------------------|
| `published_at` | Published date |
| `reading_time` | Reading time |
| `featured_image` | Featured image |
| `meta_title` | SEO title |
| `meta_description` | SEO description |

---

## 🔄 Daily Blog Workflow

### How It Works End-to-End:

1. **N8N posts blog** → Backend API (`POST /api/webhook/blog`)
2. **Backend saves** → Supabase database
3. **Frontend checks** → Every 60 seconds via `GET /api/blogs`
4. **New blog appears** → Automatically on zaincura.com/blog

**No manual intervention needed!** 🎉

---

## ⚡ Performance

### Caching Strategy:
- **ISR (Incremental Static Regeneration)**: 60 seconds
- **Static page generation** at build time
- **Dynamic updates** every 60 seconds
- **No rebuild required** for new blogs

### Benefits:
- ✅ Fast page loads (static pages)
- ✅ Fresh content (60s revalidation)
- ✅ SEO friendly (server-rendered)
- ✅ Automatic updates (no manual deploys)

---

## 🐛 Troubleshooting

### Issue: Blogs not showing on frontend

**Check 1: Backend API**
```bash
curl https://zaincura-backend.vercel.app/api/blogs
```
Expected: JSON with blog posts

**Check 2: Frontend environment variable**
```bash
# In Netlify dashboard, verify:
NEXT_PUBLIC_API_URL=https://zaincura-backend.vercel.app
```

**Check 3: CORS**
Make sure `ALLOWED_ORIGINS` in backend includes:
```
https://zaincura.com,https://www.zaincura.com
```

### Issue: Old blogs showing

**Solution**: Wait 60 seconds for revalidation, or:
1. Clear browser cache
2. Force redeploy frontend
3. Reduce revalidation time in `api.ts`

### Issue: 404 on blog posts

**Check**: Blog status is `published` not `draft`
```bash
# Test specific blog
curl https://zaincura-backend.vercel.app/api/blogs/your-blog-slug
```

---

## 📝 Next Steps

1. **Deploy Backend**
   - Follow `zaincura-backend/VERCEL_DEPLOYMENT.md`
   - Get your backend URL

2. **Update Frontend**
   - Set `NEXT_PUBLIC_API_URL` in Netlify
   - Redeploy frontend

3. **Test N8N**
   - Post a test blog via N8N
   - Wait 60 seconds
   - Check zaincura.com/blog

4. **Go Live**
   - Start posting daily blogs
   - Frontend updates automatically!

---

## ✅ Checklist

- [ ] Backend deployed to Vercel
- [ ] Backend API tested (GET /api/blogs works)
- [ ] CORS configured for zaincura.com
- [ ] Frontend environment variable set
- [ ] Frontend redeployed to Netlify
- [ ] Blog listing page loads
- [ ] Individual blog posts load
- [ ] N8N webhook tested
- [ ] Test blog appears on frontend

---

## 🎉 You're Done!

Your frontend now:
- ✅ Fetches blogs from backend API
- ✅ Updates automatically every 60 seconds
- ✅ Shows new blogs without rebuilding
- ✅ Supports daily blog posting via N8N

**No more manual updates needed!** 🚀
