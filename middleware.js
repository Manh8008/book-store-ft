import { NextResponse } from 'next/server'

const privatePaths = ['/customer/profile']
const authPaths = ['/auth/login', '/auth/register']

export function middleware(request) {
    const { pathname } = request.nextUrl
    const sessionTokenUser = request.cookies.get('sessionTokenUser')?.value
    const sessionTokenAdmin = request.cookies.get('sessionTokenAdmin')?.value

    // Chưa đăng nhập thì không cho vào privatePaths và chuyển hướng sang login
    if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionTokenUser) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // // Đăng nhập rồi thì không cho vào /auth/login và /auth/register nữa
    // if (authPaths.some((path) => pathname.startsWith(path)) && sessionTokenUser) {
    //     return NextResponse.redirect(new URL('/customer/profile', request.url))
    // }

    if (!sessionTokenAdmin && pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin/auth/login', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/customer/profile', '/auth/login', '/auth/register']
}
