import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["zh", "en"]
const defaultLocale = "zh"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // 如果 URL 中没有语言环境，则重定向到默认语言
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next) 和静态文件
    "/((?!_next|api|favicon.ico|generic-user-avatar.png).*)",
  ],
}
