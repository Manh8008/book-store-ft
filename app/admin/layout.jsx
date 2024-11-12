// Import các tệp CSS và tệp tĩnh
import "../../public/css/bootstrap.min.css";
import "../../public/css/dataTables.bootstrap4.min.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import "../../public/css/typography.css";

// Import các thư viện bên ngoài
import Head from 'next/head';
import Script from 'next/script';
import 'remixicon/fonts/remixicon.css';

// Import các component của dự án
import LeftBar from './components/leftBar';
import TopBar from './components/topBar';
import Footer from './components/footer';


export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Book Store</title>
            </Head>
            <body suppressHydrationWarning={true}>
                {/* <div id="loading">
                    <div id="loading-center">
                    </div>
                </div> */}
                <div class="wrapper">
                    <LeftBar />
                    <TopBar />
                    {children}
                </div>
                <Footer />

                <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
                <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
                <Script src="/js/select2.min.js" strategy="beforeInteractive" />
                <Script src="/js/jquery.dataTables.min.js" strategy="beforeInteractive" />
                <Script src="/js/dataTables.bootstrap4.min.js" strategy="beforeInteractive" />
                <Script src="/js/popper.min.js" strategy="beforeInteractive" />
                <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />

                <Script src="/js/jquery.appear.js" strategy="lazyOnload" />
                <Script src="/js/countdown.min.js" strategy="lazyOnload" />
                <Script src="/js/waypoints.min.js" strategy="lazyOnload" />
                <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
                <Script src="/js/wow.min.js" strategy="lazyOnload" />
                <Script src="/js/apexcharts.js" strategy="lazyOnload" />
                <Script src="/js/slick.min.js" strategy="lazyOnload" />
                <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
                <Script src="/js/smooth-scrollbar.js" strategy="lazyOnload" />
                <Script src="/js/lottie.js" strategy="lazyOnload" />
                <Script src="/js/core.js" strategy="lazyOnload" />
                <Script src="/js/charts.js" strategy="lazyOnload" />
                <Script src="/js/animated.js" strategy="lazyOnload" />
                <Script src="/js/kelly.js" strategy="lazyOnload" />
                <Script src="/js/maps.js" strategy="lazyOnload" />
                <Script src="/js/worldLow.js" strategy="lazyOnload" />
                <Script src="/js/raphael-min.js" strategy="lazyOnload" />
                <Script src="/js/morris.js" strategy="lazyOnload" />
                <Script src="/js/morris.min.js" strategy="lazyOnload" />
                <Script src="/js/flatpickr.js" strategy="lazyOnload" />
                <Script src="/js/style-customizer.js" strategy="lazyOnload" />
                <Script src="/js/chart-custom.js" strategy="lazyOnload" />
                <Script src="/js/custom.js" strategy="lazyOnload" />

            </body>
        </html>
    )
}
