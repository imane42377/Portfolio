import { NextResponse } from 'next/server';
import { matchLocale } from 'next-intl/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'fr'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true
});

export function middleware(request) {
  return intlMiddleware(request);
}

export const config = {
  // Apply middleware only to these paths
  matcher: ['/', '/(en|fr)/:path*']
};
