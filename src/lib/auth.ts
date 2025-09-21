import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

// Simple admin credentials (in production, use proper user management)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'ZainCura2024!', // Change this in production
};

export interface AdminSession {
  isAuthenticated: boolean;
  username?: string;
}

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

export async function createSession(username: string): Promise<void> {
  const cookieStore = await cookies();

  // Set secure session cookie (24 hours)
  cookieStore.set('admin-session', JSON.stringify({
    username,
    timestamp: Date.now(),
  }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60, // 24 hours
    path: '/',
  });
}

export async function getSession(): Promise<AdminSession> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin-session');

    if (!sessionCookie) {
      return { isAuthenticated: false };
    }

    const session = JSON.parse(sessionCookie.value);
    const currentTime = Date.now();
    const sessionAge = currentTime - session.timestamp;

    // Check if session is expired (24 hours)
    if (sessionAge > 24 * 60 * 60 * 1000) {
      return { isAuthenticated: false };
    }

    return {
      isAuthenticated: true,
      username: session.username,
    };
  } catch (error) {
    return { isAuthenticated: false };
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
}

export function requireAuth(request: NextRequest): boolean {
  // For API routes, check the session cookie manually
  const sessionCookie = request.cookies.get('admin-session');

  if (!sessionCookie) {
    return false;
  }

  try {
    const session = JSON.parse(sessionCookie.value);
    const currentTime = Date.now();
    const sessionAge = currentTime - session.timestamp;

    // Check if session is expired (24 hours)
    return sessionAge <= 24 * 60 * 60 * 1000;
  } catch (error) {
    return false;
  }
}
