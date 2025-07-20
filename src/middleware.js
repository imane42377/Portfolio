// middleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localeDetection: true
});

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico|assets|images|api).*)']
};
