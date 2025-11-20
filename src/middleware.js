import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Downloads behalten ihre Großbuchstaben
  if (pathname.startsWith("/downloads/")) {
    return NextResponse.next();
  }

  // Prüfe ob der Pfad Großbuchstaben enthält
  if (pathname !== pathname.toLowerCase()) {
    // Erstelle neue URL mit lowercase pathname
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();

    // Redirect zu lowercase URL
    return NextResponse.redirect(url, 308); // 308 = Permanent Redirect
  }

  return NextResponse.next();
}

// Optional: Konfiguriere auf welche Pfade die Middleware angewendet wird
export const config = {
  matcher: [
    /*
     * Match alle Pfade außer:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
