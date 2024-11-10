import { AccountSidebar } from '@/components/account-sidebar'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const CustomerLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ background: '#F5F5FA' }}>
                <div className="container">
                    <AccountSidebar />

                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default CustomerLayout
