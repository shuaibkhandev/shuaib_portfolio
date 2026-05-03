import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the auth token from cookies
  const authToken = request.cookies.get('site_auth_token')?.value;

  // If no auth token is present, redirect to the login page
  if (authToken !== 'true') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If authenticated, allow the request to proceed
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/private/:path*',
};
