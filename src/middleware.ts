import { type NextRequest, NextResponse } from "next/server";
import { request } from "./configs/fetch";
import { getLocale } from "./lib/locale.util";

export async function middleware(req: NextRequest) {
  const { data } = await request<Locale[]>("i18n/locales", {
    cache: "force-cache",
  });
  const { pathname } = req.nextUrl;
  const locales = data?.map((locale) => locale.code) || ["en"];

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = await getLocale(locales);

  req.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
