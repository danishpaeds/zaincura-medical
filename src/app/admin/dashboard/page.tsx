import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { getAllBlogPosts } from '@/lib/blog';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default async function AdminDashboardPage() {
  const session = await getSession();

  if (!session.isAuthenticated) {
    redirect('/admin/login');
  }

  const blogPosts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminDashboard
        initialPosts={blogPosts}
        username={session.username || 'Admin'}
      />
    </div>
  );
}
