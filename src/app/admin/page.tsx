import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Link from 'next/link';

export default async function AdminLandingPage() {
  const session = await getSession();

  // If already authenticated, redirect to dashboard
  if (session.isAuthenticated) {
    redirect('/admin/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Zain Cura Admin Portal
          </h1>

          <p className="text-gray-600 mb-8">
            Blog Management & Content Administration
          </p>

          <Link
            href="/admin/login"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            🔐 Access Admin Dashboard
          </Link>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
