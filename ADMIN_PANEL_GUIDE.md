# Admin Panel Guide - Zain Cura Medical Center

## ✅ Status: FULLY FUNCTIONAL

The admin panel has been successfully implemented with complete backend API routes.

## 🔐 Access the Admin Panel

**Login URL:** http://localhost:3000/admin/login

**Credentials:**
- **Username:** `admin`
- **Password:** `ZainCura2024!`

## 📋 Features

### 1. **Authentication System**
- Secure cookie-based session management
- 24-hour session duration
- Protected routes requiring authentication

### 2. **Blog Management Dashboard**
- View all blog posts (published and drafts)
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- Toggle between draft and published status

### 3. **Blog Editor**
Complete form with the following fields:
- Title
- Excerpt (short description)
- Content (main article body)
- Category (dropdown selection)
- Tags (comma-separated)
- Featured Image URL
- Meta Title (SEO)
- Meta Description (SEO)
- Author name
- Status (Draft/Published)

### 4. **Image Upload**
- Image upload component for featured images
- Image gallery support

## 🛠️ API Endpoints Created

### Authentication
- `POST /api/admin/auth/login` - Admin login
- `POST /api/admin/auth/logout` - Admin logout

### Blog Posts
- `GET /api/admin/blogs` - Get all blog posts
- `POST /api/admin/blogs` - Create new blog post
- `PUT /api/admin/blogs/[id]` - Update existing blog post
- `DELETE /api/admin/blogs/[id]` - Delete blog post

## 📁 Data Storage

Blog posts are stored in: `data/blog-posts.json`

Current blog posts in database:
- 3 Published posts
- 2 Draft posts

## 🚀 How to Use

### Login
1. Navigate to http://localhost:3000/admin/login
2. Enter credentials (admin / ZainCura2024!)
3. Click "Sign In"

### Create a New Blog Post
1. After login, you'll be on the dashboard
2. Click "Create New Post" button
3. Fill in all required fields (title, excerpt, content)
4. Select category and add tags
5. Choose "Draft" or "Published" status
6. Click "Save Post"

### Edit a Blog Post
1. From the dashboard, find the post you want to edit
2. Click the "Edit" button
3. Make your changes
4. Click "Save Post"

### Delete a Blog Post
1. From the dashboard, find the post you want to delete
2. Click the "Delete" button
3. Confirm deletion

### Logout
- Click the "Logout" button in the top right of the dashboard

## 🔒 Security Notes

**IMPORTANT:** The current authentication uses hardcoded credentials which is suitable for development/testing only.

For production deployment:
1. Change the admin password in `src/lib/auth.ts`
2. Consider implementing proper user management with database
3. Use environment variables for sensitive data
4. Implement HTTPS for secure communication

## 📝 Notes

- Reading time is automatically calculated based on word count
- Slug is auto-generated from the blog title
- All timestamps are in ISO format
- Session expires after 24 hours of inactivity
