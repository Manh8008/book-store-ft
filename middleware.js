import { NextResponse } from 'next/server'

// Định nghĩa các đường dẫn cần kiểm tra quyền truy cập
const privatePaths = [
    '/auth/change-password',
    '/customer/address',
    '/customer/address/create',
    '/customer/address/update'
]
const authPaths = ['/auth/login', '/auth/register']
const authPathsAdmin = ['/admin/auth/login']

// Middleware xử lý
export function middleware(request) {
    const { pathname } = request.nextUrl
    const sessionTokenUser = request.cookies.get('sessionTokenUser')?.value
    const sessionTokenAdmin = request.cookies.get('sessionTokenAdmin')?.value

    // Chặn người dùng chưa đăng nhập truy cập vào các đường dẫn private (customer)
    if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionTokenUser) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // Chặn người dùng đã đăng nhập truy cập vào các trang đăng nhập/đăng ký
    if (authPaths.some((path) => pathname.startsWith(path)) && sessionTokenUser) {
        return NextResponse.redirect(new URL('/customer/profile', request.url))
    }

    // Chặn người dùng đã đăng nhập ở admin khi đã đăng nhập rồi.
    if (authPathsAdmin.some((path) => pathname.startsWith(path)) && sessionTokenAdmin) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    // Bảo vệ các trang admin (trừ /admin/auth/login)
    if (pathname.startsWith('/admin') && pathname !== '/admin/auth/login' && !sessionTokenAdmin) {
        return NextResponse.redirect(new URL('/admin/auth/login', request.url))
    }

    // 4. Cho phép tiếp tục nếu không vi phạm điều kiện nào
    return NextResponse.next()
}

// Config matcher
export const config = {
    matcher: [
        '/api/auth/:path*',
        '/api/provinces/:path*',
        '/api/districts/:path*',
        '/api/wards/:path*'
    ]
}
