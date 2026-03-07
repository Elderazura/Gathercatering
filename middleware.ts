import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/routing';

export default createMiddleware(routing);

export const config = {
  // Match all paths so next-intl can redirect /about -> /en/about etc.
  // Exclude api, static files, sitemap.xml, robots.txt for crawler access
  matcher: ['/((?!api|_next|_vercel|sitemap\\.xml|robots\\.txt|.*\\..*).*)']
};
