import { cookies } from 'next/headers'
import Script from 'next/script'
import '../globals.scss'
import '../../public/css/bootstrap.min.css'
import '../../public/css/dataTables.bootstrap4.min.css'
import '../../public/css/style.css'
import '../../public/css/responsive.css'
import '../../public/css/typography.css'

import 'remixicon/fonts/remixicon.css'
import Footer from './components/footer'
import AppProvider from '../AppProvider'
import { MainLayoutAdmin } from '@/layouts/main-layout-admin'

export const metadata = {
    title: 'Book Store',
    description: 'Book Store App'
}

export default function RootLayout({ children }) {
    const cookieStore = cookies()
    const sessionTokenAdmin = cookieStore.get('sessionTokenAdmin')

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <AppProvider
                    initialAdminSessionToken={sessionTokenAdmin && sessionTokenAdmin.value}
                >
                    <div className="wrapper">
                        <MainLayoutAdmin>{children}</MainLayoutAdmin>
                    </div>
                </AppProvider>
                <Footer />

                <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
                <Script src="/js/popper.min.js" strategy="beforeInteractive" />
                <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
                <Script src="/js/dataTables.bootstrap4.min.js" strategy="beforeInteractive" />
                {/* 
                <Script src="/js/slick.min.js" strategy="lazyOnload" /> */}
                {/* <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" /> */}
            </body>
        </html>
    )
}
