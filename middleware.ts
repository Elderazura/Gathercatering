import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/routing';

export default createMiddleware(routing);

export const config = {
  // Match all paths so next-intl can redirect /about -> /en/about etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
