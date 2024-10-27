import { NextResponse } from 'next/server'

const privatePaths = ['/profile']
const authPaths = ['/auth/login', '/auth/register']

export function middleware(request) {
    const { pathname } = request.nextUrl
    const sessionToken = request.cookies.get('sessionToken')?.value

    // Chưa đăng nhập thì không cho vào privatePaths và chuyển hướng sang login
    if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // Đăng nhập rồi thì không cho vào /auth/login và /auth/register nữa
    if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
        return NextResponse.redirect(new URL('/profile', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/profile', '/auth/login', '/auth/register']
}
