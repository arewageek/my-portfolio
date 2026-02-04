import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth-utils';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get('admin_token')?.value;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      await decrypt(session);
      return NextResponse.next();
    } catch (error) {
      // Invalid session
      console.error('Middleware: Session decryption failed', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect to /admin if already logged in and trying to access /login
  if (pathname === '/login' && session) {
    try {
      await decrypt(session);
      return NextResponse.redirect(new URL('/admin', request.url));
    } catch (error) {
      // Invalid session, allow login
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
